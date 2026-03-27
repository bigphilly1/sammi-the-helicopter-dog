import { Star } from "lucide-react"

const reviews = [
  {
    rating: 5,
    text: "My kids absolutely loved this book! The illustrations are stunning and the story has such a wonderful message about being yourself.",
    author: "Sarah M.",
    source: "Amazon Review",
  },
  {
    rating: 5,
    text: "A beautiful story with a heartwarming message. We read it every night now - it's become our favourite bedtime story!",
    author: "David L.",
    source: "Amazon Review",
  },
  {
    rating: 5,
    text: "The artwork is breathtaking and the story teaches kids that being different is actually a superpower. Highly recommend!",
    author: "Emma T.",
    source: "Amazon Review",
  },
]

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
            5-star rated on Amazon. See what parents and kids are saying about Sammi&apos;s adventure.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
