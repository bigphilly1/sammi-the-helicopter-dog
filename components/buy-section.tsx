import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Smartphone, Star } from "lucide-react"

const retailers = [
  {
    name: "Buy directly from Sammi & get a signed copy!",
    url: "mailto:sammithehelicopterdog@gmail.com?subject=Signed%20Copy%20Order&body=Hi%20Phil%2C%20I%27d%20love%20to%20order%20a%20signed%20copy%20of%20Sammi%20The%20Helicopter%20Dog!",
    primary: true,
    highlight: true,
    external: false,
  },
  {
    name: "Amazon Australia",
    url: "https://www.amazon.com.au/Sammi-Helicopter-Dog-First-Flight/dp/0645417122",
    primary: true,
    highlight: false,
    external: true,
  },
  {
    name: "Booktopia",
    url: "https://www.booktopia.com.au/sammi-the-helicopter-dog/book/9780645417128.html",
    primary: true,
    highlight: false,
    external: true,
  },
  {
    name: "Barnes & Noble",
    url: "https://www.barnesandnoble.com/w/sammi-the-helicopter-dog-my-first-flight-phil-carey/1141019033",
    primary: false,
    highlight: false,
    external: true,
  },
  {
    name: "BookLoop",
    url: "https://www.bookloop.com.au/sammi-the-helicopter-dog-my-first-flight-phil-carey-9780645417128/",
    primary: false,
    highlight: false,
    external: true,
  },
]

export function BuySection() {
  return (
    <section id="buy" className="py-20 relative bg-gradient-to-b from-[#f0fdff] via-[#e8f8fb] to-[#ecfeff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get Your Copy Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available in paperback and digital formats. The perfect gift for children ages 2-8.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Book Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform -rotate-3" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebook%20cover-AoeYlgB1BevrJ6nDJkyGOmAiy4msHh.jpg"
                alt="Sammi The Helicopter Dog book cover"
                width={350}
                height={350}
                className="relative rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Purchase Options */}
          <div className="space-y-8">
            {/* Format Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">Paperback</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">Check price</p>
                <p className="text-sm text-muted-foreground">32 pages, 21.59 x 21.59 cm</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">Kindle eBook</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">Check price</p>
                <p className="text-sm text-muted-foreground">Read instantly on any device</p>
              </div>
            </div>

            {/* Retailer Links */}
            <div className="space-y-3">
              {retailers.map((retailer) => (
                <Button
                  key={retailer.name}
                  asChild
                  variant={retailer.highlight ? "default" : retailer.primary ? "default" : "outline"}
                  size="lg"
                  className={`w-full text-base font-semibold ${
                    retailer.highlight
                      ? "bg-accent hover:bg-accent/90 text-white border-2 border-accent/50 shadow-lg"
                      : retailer.primary
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : ""
                  }`}
                >
                  <a
                    href={retailer.url}
                    target={retailer.external ? "_blank" : "_self"}
                    rel={retailer.external ? "noopener noreferrer" : undefined}
                  >
                    {retailer.highlight && <Star className="w-4 h-4 mr-2 fill-current" />}
                    {retailer.highlight ? retailer.name : `Buy on ${retailer.name}`}
                  </a>
                </Button>
              ))}
            </div>

            {/* Book 2 Teaser */}
            <div className="bg-secondary/30 rounded-xl p-6 text-center">
              <p className="text-sm font-medium text-secondary-foreground mb-1">
                This is Book 1 of the Sammi series
              </p>
              <p className="text-muted-foreground">
                Book 2 is coming soon with new friends and exciting adventures!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
