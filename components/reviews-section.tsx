import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const AMAZON_URL = "https://www.amazon.com.au/Sammi-Helicopter-Dog-First-Flight/dp/0645417122"

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 relative bg-gradient-to-b from-[#f5f3ff]/30 via-[#fdf4ff]/20 to-[#f0fdff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rated 5 stars on Amazon. Read what parents and children are saying about Sammi&apos;s adventure.
          </p>
        </div>

        {/* Amazon CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-sm border border-white/50 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xl text-foreground font-medium mb-2 leading-relaxed max-w-xl mx-auto">
              &ldquo;A beautiful story with a heartwarming message. The illustrations are absolutely stunning
              and the message about being different is one every child needs to hear.&rdquo;
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              — Verified Amazon Review
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <a
                  href={`${AMAZON_URL}#customerReviews`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read All Reviews on Amazon
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={`${AMAZON_URL}#customerReviews`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave Your Own Review
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
