import { NextResponse } from "next/server"

// Create a segment in Flodesk called "Signed Copy Orders" and paste its ID here
// in your Vercel environment variables as FLODESK_SIGNED_COPY_SEGMENT_ID
const SEGMENT_ID = process.env.FLODESK_SIGNED_COPY_SEGMENT_ID

export async function POST(request: Request) {
  try {
    const { childName, email } = await request.json()

    if (!email || !childName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.FLODESK_API_KEY) {
      console.error("FLODESK_API_KEY is not set")
      // Non-fatal — Stripe payment will still proceed
      return NextResponse.json({ ok: true })
    }

    const payload: Record<string, unknown> = {
      email: email.toLowerCase().trim(),
      custom_fields: {
        child_name: childName.trim(),
      },
    }

    if (SEGMENT_ID) {
      payload.segment_ids = [SEGMENT_ID]
    }

    const response = await fetch("https://api.flodesk.com/v1/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${process.env.FLODESK_API_KEY}:`).toString("base64")}`,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const body = await response.text()
      console.error("Flodesk signed-copy error:", response.status, body)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Signed copy API error:", error)
    // Return ok so the client still redirects to Stripe
    return NextResponse.json({ ok: true })
  }
}
