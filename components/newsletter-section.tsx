"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Instagram } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter_section" }),
      })
      const data = await response.json()
      setMessage(data.message || data.error)
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch {
      setMessage("Something went wrong. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <section id="newsletter" className="py-20 relative bg-gradient-to-b from-[#ecfeff] via-[#f0f9ff] to-[#e0f7fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Stay Updated</span>
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Be the First to Know About Book 2!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join Sammi&apos;s adventure club! Get exclusive updates, sneak peeks of upcoming 
                  books, and special offers delivered straight to your inbox.
                </p>

                {isSubmitted ? (
                  <div className="flex items-center gap-3 bg-green-50 text-green-700 rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">You&apos;re on the list!</p>
                      <p className="text-sm">{message || "We'll let you know when Book 2 is ready."}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-primary hover:bg-primary/90 whitespace-nowrap"
                      >
                        {isLoading ? "Joining..." : "Join the Club"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>

              {/* Sammi Image + Instagram CTA */}
              <div className="hidden md:flex flex-col items-center gap-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25%20and%2026-oOTSAFXCTk0StFeYfqFU7l2JFp3B9a.jpg"
                  alt="Sammi the helicopter dog"
                  width={280}
                  height={280}
                  className="rounded-2xl"
                />
                <a
                  href="https://instagram.com/sammithehelicopterdog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Follow Sammi on Instagram
                </a>
                <p className="text-xs text-muted-foreground text-center max-w-[200px]">
                  Daily life with the real Sammi, behind-the-scenes of Book 2, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
