import Image from "next/image"

export function AuthorSection() {
  return (
    <section id="author" className="py-20 relative bg-gradient-to-b from-[#e0f2fe]/50 via-[#f0fdff] to-[#f5f3ff]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the Author
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
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
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
              Phil Carey
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Phil Carey is a Sydney-based author with over 40 years of experience as a 
              highly accomplished and award-winning television and radio journalist and producer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The inspiration for Sammi The Helicopter Dog came from the real Sammi - 
              Phil&apos;s beloved cavoodle and much-loved member of the family. &quot;She is a delight 
              and I only wish I&apos;d got a dog earlier,&quot; Phil says.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With stunning illustrations by internationally renowned Polish artist 
              <strong className="text-foreground"> Marcin Piwowarski</strong>, Sammi&apos;s story 
              comes to life in a way that captures the hearts of children and parents alike.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground italic">
                &quot;Love is a powerful force and life isn&apos;t always as it seems. While people 
                live in different countries and look different, we all want the same things: 
                to be safe, happy and loved.&quot;
              </p>
              <p className="text-sm text-primary font-medium mt-2">
                — Phil Carey
              </p>
            </div>
          </div>
        </div>

        {/* Dedication */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
            <p className="text-lg text-muted-foreground italic mb-2">
              Dedicated to Robyn.
            </p>
            <p className="text-muted-foreground">
              &quot;I wish I could have read it to you.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
