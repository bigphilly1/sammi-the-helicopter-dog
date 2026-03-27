import { HeroSection } from "@/components/hero-section"
import { AboutBookSection } from "@/components/about-book-section"
import { PreviewSection } from "@/components/preview-section"
import { AuthorSection } from "@/components/author-section"
import { ReviewsSection } from "@/components/reviews-section"
import { BuySection } from "@/components/buy-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { FreeBookPopup } from "@/components/free-book-popup"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutBookSection />
      <PreviewSection />
      <AuthorSection />
      <ReviewsSection />
      <BuySection />
      <NewsletterSection />
      <Footer />
      <FreeBookPopup />
    </main>
  )
}
