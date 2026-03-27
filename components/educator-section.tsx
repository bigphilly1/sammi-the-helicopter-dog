import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Mail, FileText } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Classroom Reading",
    description:
      "Sammi works beautifully as a shared read-aloud for early primary classes. The story opens natural conversations about difference, belonging, and courage.",
  },
  {
    icon: GraduationCap,
    title: "Author Visits",
    description:
      "Phil Carey is available to visit schools for author talks and reading sessions. With 40 years in broadcast storytelling, he connects with children and staff alike.",
  },
  {
    icon: FileText,
    title: "Review Copies",
    description:
      "Librarians and teachers can request a review copy before recommending the book for purchase. Just get in touch.",
  },
]

export function EducatorSection() {
  return (
    <section
      id="educators"
      className="py-20 relative bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe]/40 to-[#f0fdff]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">For Schools &amp; Libraries</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sammi in the Classroom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sammi The Helicopter Dog is well suited to early primary classrooms and school libraries.
            It carries a message that resonates with teachers, parents, and children — that
            what makes you different can be your greatest strength.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-3">
              Interested in bringing Sammi to your school?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you&apos;re a teacher exploring classroom resources, a librarian considering a new
              acquisition, or a school looking to book an author visit — we&apos;d love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link
                href="mailto:sammithehelicopterdog@gmail.com?subject=School%20Enquiry&body=Hi%20Phil%2C%20I%27d%20like%20to%20enquire%20about%20Sammi%20The%20Helicopter%20Dog%20for%20our%20school."
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
