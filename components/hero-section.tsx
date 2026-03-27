import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-[#e0f7fa] via-[#f0fdff] to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-secondary-foreground">
                5-Star Reviews on Amazon
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Meet Sammi,
              <br />
              <span className="text-primary">The Helicopter Dog</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              A heartwarming tale about a little cavoodle whose tail spins so fast, 
              she lifts off the ground! Join Sammi on her first magical flight 
              as she discovers that being different can be the greatest gift of all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link href="#buy">Get Your Copy</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="#preview">Sneak Peek</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Ages 2-8</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">32 Pages</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Book 1 of Series</span>
              </div>
            </div>
          </div>

          {/* Book Cover Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Shadow/glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform translate-y-4" />
              
              {/* Book cover */}
              <div className="relative transform hover:scale-105 transition-transform duration-500 hover:rotate-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook%20cover-AoeYlgB1BevrJ6nDJkyGOmAiy4msHh.jpg"
                  alt="Sammi The Helicopter Dog - My First Flight book cover"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
