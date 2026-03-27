import Image from "next/image"
import { Heart, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "A Story About Love",
    description: "Discover how love is a powerful force that helps us overcome any challenge.",
  },
  {
    icon: Sparkles,
    title: "Embrace Being Different",
    description: "Sammi learns that her unique tail isn't a flaw - it's her superpower.",
  },
  {
    icon: Users,
    title: "Family & Friendship",
    description: "A celebration of the bonds that hold us together when it matters most.",
  },
]

export function AboutBookSection() {
  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-[#f0fdff] via-[#e8f8fb] to-[#fdf2f8]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About the Book
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The first in a series of illustrated children&apos;s books about a dog who's love for her family inspires her to fly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Summary */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              When <strong className="text-foreground">Sammi the Cavoodle</strong> was born, 
              she was different from her brothers and sisters. Her tail wagged constantly - 
              even in her sleep! The older she got, the more her tail wagged.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One day, during a family adventure, one of Sammi&apos;s sisters falls into a rushing 
              creek and is swept toward a dangerous waterfall. With no one able to help, 
              Sammi&apos;s worry makes her tail spin faster and faster until...
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">She lifts off the ground!</strong> Sammi 
              discovers she can fly, and suddenly her &quot;different&quot; tail becomes the very 
              thing that saves the day.
            </p>
            <p className="text-primary font-semibold text-lg italic">
              &quot;I could have fun with this helicopter tail of mine.&quot;
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9%20and%2010-P991XqpzquUrKGYIrYaM1HfyEO4RTl.jpg"
              alt="Sammi's tail spinning like a helicopter"
              width={700}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-white/50 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
