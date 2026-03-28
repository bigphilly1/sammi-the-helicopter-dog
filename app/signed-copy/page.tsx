"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Lock, Package } from "lucide-react"

export default function SignedCopyPage() {
  const [childName, setChildName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const STRIPE_URL = "https://buy.stripe.com/bJe9ATdtW6wS67y8Gc7N60d"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!childName.trim()) {
      setError("Please enter your child's name so Sammi knows who to sign it for!")
      return
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address so we can confirm your order.")
      return
    }

    setLoading(true)

    try {
      await fetch("/api/signed-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childName: childName.trim(), email: email.trim() }),
      })
    } catch {
      // Non-blocking — proceed to Stripe even if API call fails
    }

    // Store child name for thank-you page
    sessionStorage.setItem("sammi_child_name", childName.trim())

    setLoading(false)
    window.location.href = STRIPE_URL
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdff] via-[#e8f8fb] to-[#ecfeff]">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-xl font-bold text-primary">
              Sammi
            </span>
            <span className="text-sm text-muted-foreground">The Helicopter Dog</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Star badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-accent">Personally Signed by Sammi</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get Your Signed Copy
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell Sammi who to sign it for — every copy is personally dedicated by Phil on Sammi&apos;s behalf.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-white/60 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="childName"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Who should Sammi sign it for? ✨
              </label>
              <input
                id="childName"
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="e.g. Sophie, Jack, the whole Riley family…"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <p className="text-xs text-muted-foreground mt-2">
                Phil will write this name in the front of the book when he signs it.
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Your email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <p className="text-xs text-muted-foreground mt-2">
                We&apos;ll keep you updated on Book 2 and future Sammi adventures.
              </p>
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">{error}</p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent/90 text-white text-base font-semibold shadow-lg"
            >
              <Lock className="w-4 h-4 mr-2" />
              {loading ? "Just a moment…" : "Proceed to Secure Payment →"}
            </Button>
          </form>
        </div>

        {/* Trust signals */}
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: Star, label: "Personally signed", sub: "by Phil for Sammi" },
            { icon: Package, label: "Shipped to your door", sub: "within a few days" },
            { icon: Lock, label: "Secure payment", sub: "powered by Stripe" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-white/60 rounded-xl p-4 border border-white/50">
              <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          <Link href="/" className="hover:text-primary underline underline-offset-2">
            ← Back to the book
          </Link>
        </p>
      </main>
    </div>
  )
}
