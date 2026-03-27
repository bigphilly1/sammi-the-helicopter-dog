"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const previewImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20and%202%20copy-Q83BZDI1KyphEbZBtMFvbbEcXPwyTI.jpg",
    alt: "Sammi the puppy with her siblings in a basket",
    caption: "When Sammi the Cavoodle was born, she was different from her brothers and sisters...",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20and%204%20copy-NmxuuAcYse80e9vBWQGknZjwt18jah.jpg",
    alt: "The puppies go on an adventure",
    caption: "One day, their mother decided to take them for an adventure in the sunshine.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20and%206-kZbvc9eonbTywdsnNMSIirYNyYkrwj.jpg",
    alt: "The puppies discover the forest and creek",
    caption: "They discovered the forest was full of other animals and birds.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11%20and%2012-TYsoZoB2ZyaZHpKWCKFU9tw8J0svZR.jpg",
    alt: "Sammi's tail starts spinning and she lifts off",
    caption: "Sammi's tail was spinning so fast her back feet began to gently lift off the ground!",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19%20and%2020-XEnSwYoPN7C3kuPmAf14pMGGoyntB5.jpg",
    alt: "Sammi rescues her sister",
    caption: "Just in time, Sammi reached down and grabbed her sister's neck.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23%20and%2024-eZxVcAu1T0MEp893fAR1TeMTcVKt9W.jpg",
    alt: "Happy family reunion",
    caption: "Sammi thought to herself, 'I could have fun with this helicopter tail of mine.'",
  },
]

export function PreviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? previewImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === previewImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="preview" className="py-20 relative bg-gradient-to-b from-[#fdf2f8]/30 via-[#f0f9ff] to-[#e0f2fe]/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sneak Peek Inside
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful illustrations by internationally renowned artist Marcin Piwowarski bring Sammi&apos;s adventure to life.
          </p>
        </div>

        {/* Main Preview Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-card">
            <Image
              src={previewImages[currentIndex].src}
              alt={previewImages[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="text-center mt-6 mb-8">
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              &quot;{previewImages[currentIndex].caption}&quot;
            </p>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background rounded-full shadow-lg"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background rounded-full shadow-lg"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {previewImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-12 sm:w-24 sm:h-14 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
