"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X, Gift, CheckCircle, Sparkles } from "lucide-react"

export function FreeBookPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const hasSubscribed = localStorage.getItem("sammi-subscribed")
    // Never show again if they've already subscribed
    if (hasSubscribed) return

    const firstSeenAt = localStorage.getItem("sammi-popup-first-seen")
    const secondShownAt = localStorage.getItem("sammi-popup-second-shown")

    // Never show again if second showing has already happened
    if (secondShownAt) return

    const now = Date.now()
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

    if (!firstSeenAt) {
      // First ever visit — show after 5 seconds and record the timestamp
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("sammi-popup-first-seen", String(now))
      }, 5000)
      return () => clearTimeout(timer)
    }

    // First seen already — check if 7 days have passed for the second showing
    const daysSinceFirst = now - parseInt(firstSeenAt, 10)
    if (daysSinceFirst >= SEVEN_DAYS_MS) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("sammi-popup-second-shown", String(now))
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "free_book_popup" }),
      })
      const data = await response.json()
      setMessage(data.message || data.error)
      if (response.ok) {
        setIsSubmitted(true)
        localStorage.setItem("sammi-subscribed", "true")
      }
    } catch {
      setMessage("Something went wrong. Please try again.")
    }
    setIsLoading(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-[#f0fdff] to-white border-2 border-primary/20 p-0 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1.5 hover:bg-white transition-colors"
        >
          <X className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Close</span>
        </button>

        <div className="relative">
          {/* Header decoration */}
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 h-2" />
          
          <div className="p-6 pt-4">
            <DialogHeader className="text-center mb-4">
              <div className="flex justify-center mb-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
              </div>
              <DialogTitle className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                Win a Free Digital Copy!
              </DialogTitle>
            </DialogHeader>

            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  You&apos;re Entered!
                </h3>
                <p className="text-muted-foreground text-sm">
                  {message || "We'll announce a winner every week. Good luck!"}
                </p>
                <Button
                  onClick={handleClose}
                  className="mt-6 bg-primary hover:bg-primary/90"
                >
                  Continue Exploring
                </Button>
              </div>
            ) : (
              <>
                {/* Book preview */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook%20cover-AoeYlgB1BevrJ6nDJkyGOmAiy4msHh.jpg"
                      alt="Sammi The Helicopter Dog book cover"
                      width={120}
                      height={120}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-1.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <p className="text-center text-muted-foreground text-sm mb-4">
                  Every week we give away a <strong>free digital copy</strong> of 
                  &quot;Sammi The Helicopter Dog&quot; to one lucky subscriber!
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-center"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {isLoading ? "Entering..." : "Enter to Win"}
                  </Button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-3">
                  Plus get updates on Book 2 and special offers!
                </p>

                <button
                  onClick={handleClose}
                  className="w-full text-center text-xs text-muted-foreground mt-4 hover:text-foreground transition-colors"
                >
                  No thanks, maybe later
                </button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
