import { NextResponse } from "next/server"

// Flodesk segment for this product — naming convention: "Sammi —"
const FLODESK_SEGMENT_ID = process.env.FLODESK_SEGMENT_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    if (!process.env.FLODESK_API_KEY) {
      console.error("FLODESK_API_KEY is not set")
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    // Add subscriber to Flodesk, optionally assign to segment
    const payload: Record<string, unknown> = {
      email: email.toLowerCase(),
    }
    if (FLODESK_SEGMENT_ID) {
      payload.segment_ids = [FLODESK_SEGMENT_ID]
    }

    const response = await fetch("https://api.flodesk.com/v1/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${process.env.FLODESK_API_KEY}:`).toString("base64")}`,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok && response.status !== 200) {
      const body = await response.text()
      console.error("Flodesk error:", response.status, body)
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
