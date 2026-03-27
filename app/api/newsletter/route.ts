import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, source = "website" } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check if email already exists
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email.toLowerCase())
      .single()

    if (existing) {
      return NextResponse.json(
        { message: "You're already subscribed! We'll notify you when Book 2 is ready." },
        { status: 200 }
      )
    }

    // Insert new subscriber
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: email.toLowerCase(),
        source,
      })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Thank you for subscribing! We'll let you know when Book 2 takes flight." },
      { status: 201 }
    )
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
