"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Package, Clock, Mail } from "lucide-react"

export default function ThankYouPage() {
  const [childName, setChildName] = useState<string | null>(null)

  useEffect(() => {
    const name = sessionStorage.getItem("sammi_child_name")
    if (name) {
      setChildName(name)
      sessionStorage.removeItem("sammi_child_name")
    }
  }, [])

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

      <main className="container mx-auto px-4 py-12 max-w-2xl text-center">
        {/* Hero image */}
        <div className="relative w-full max-w-lg mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/sammi-wrapping.jpg"
            alt="Sammi excitedly packing your book!"
            width={800}
            height={450}
            className="w-full object-cover"
            priority
          />
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {childName
            ? `Sammi is packing ${childName}'s book right now! 🐾`
            : "Sammi is onto it! 🐾"}
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
          Thank you so much for your order. Phil is signing the book on Sammi&apos;s behalf
          and it will be on its way to you very soon.
        </p>

        {/* What happens next */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-white/60 mb-10 text-left">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-6 text-center">
            What happens next
          </h2>
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Confirmation email",
                desc: "You'll receive a payment receipt from Stripe shortly.",
              },
              {
                icon: Package,
                title: "Signed &amp; packed",
                desc: "Phil signs your copy and packs it carefully for the journey.",
              },
              {
                icon: Clock,
                title: "On its way",
                desc: "Your book should arrive within a few business days.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p
                    className="font-semibold text-foreground"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedication quote */}
        <div className="bg-white/60 rounded-2xl px-8 py-6 border border-white/50 mb-10">
          <p className="font-[family-name:var(--font-display)] text-lg text-foreground italic">
            &ldquo;What makes you different can be your greatest gift.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Sammi The Helicopter Dog</p>
        </div>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/">Back to Sammi&apos;s world</Link>
        </Button>

        <p className="text-xs text-muted-foreground mt-6">
          Questions? Email{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&to=sammithehelicopterdog@gmail.com&su=Order%20Enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            sammithehelicopterdog@gmail.com
          </a>
        </p>
      </main>
    </div>
  )
}
