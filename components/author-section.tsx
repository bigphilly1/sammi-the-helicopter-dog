import Image from "next/image"
import { Award, Mic, Tv } from "lucide-react"

export function AuthorSection() {
  return (
    <section id="author" className="py-20 relative bg-gradient-to-b from-[#e0f2fe]/50 via-[#f0fdff] to-[#f5f3ff]/30">
      <div className="container mx-auto px-4">

        {/* Dedication — given room to breathe */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-10 py-10 shadow-md border border-white/60">
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Dedicated to Robin.
            </p>
            <p className="text-xl text-muted-foreground italic">
              &ldquo;I wish I could have read it to you.&rdquo;
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Team Behind Sammi
          </h2>
        </div>

        {/* Phil Carey */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          {/* Author Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl transform translate-x-4 translate-y-4" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phil%20Sammi%20Book%20Landscape-VE4sNfvICjGYxMV9Hc6wU4FlukFCzy.jpg"
                alt="Phil Carey with the real Sammi"
                width={500}
                height={350}
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Author Bio */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">Author</p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                Phil Carey
              </h3>
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Tv className="w-4 h-4" />
                Television Journalist
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Mic className="w-4 h-4" />
                Radio Producer
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Award className="w-4 h-4" />
                Award Winner
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Phil Carey is a Sydney-based author and children&apos;s book creator with over 40 years of
              experience as an award-winning television and radio journalist and producer. His career
              spans major Australian and international broadcasters, where he was recognised for
              storytelling that connected with audiences of all ages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The inspiration for Sammi came from his beloved cavoodle — and Phil&apos;s great love for her.
              &ldquo;She is a delight and I only wish I&apos;d got a dog earlier.&rdquo; The book&apos;s central theme —
              that what makes you different can become your greatest gift — is one Phil believes every
              child deserves to hear early.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground italic">
                &ldquo;Love is a powerful force and life isn&apos;t always as it seems. While people
                live in different countries and look different, we all want the same things:
                to be safe, happy and loved.&rdquo;
              </p>
              <p className="text-sm text-primary font-medium mt-2">
                — Phil Carey
              </p>
            </div>
          </div>
        </div>

        {/* Marcin Piwowarski */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-sm border border-white/50">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
              <div className="hidden md:flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl flex-shrink-0">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">M</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">Illustrator</p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                    Marcin Piwowarski
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Marcin Piwowarski is a Polish artist and illustrator whose work has been published
                  internationally across children&apos;s books, editorial illustration, and commercial projects.
                  Based in Poland, Marcin is known for his ability to bring warmth, movement, and emotional
                  depth to every page — hallmarks that make his illustrations genuinely memorable for
                  young readers and the parents who read alongside them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His illustrations for Sammi capture not just the story, but the feeling behind it —
                  the love between a family and a dog, the fear of a rushing creek, the pure joy of
                  first flight. Parents and children respond to that quality. It&apos;s why the preview
                  pages are so often what converts a browser into a buyer.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
