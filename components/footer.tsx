import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0891b2] to-[#0e7490] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4">
              Sammi The Helicopter Dog
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A heartwarming children&apos;s book series about a lovable cavoodle 
              who discovers that being different is her greatest superpower.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  About the Book
                </Link>
              </li>
              <li>
                <Link href="#preview" className="text-white/80 hover:text-white transition-colors">
                  Sneak Peek
                </Link>
              </li>
              <li>
                <Link href="#author" className="text-white/80 hover:text-white transition-colors">
                  Meet the Author
                </Link>
              </li>
              <li>
                <Link href="#buy" className="text-white/80 hover:text-white transition-colors">
                  Get Your Copy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Sammi</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/sammithehelicopterdog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @sammithehelicopterdog
              </a>
              <a
                href="mailto:sammithehelicopterdog@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                sammithehelicopterdog@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Sammi The Helicopter Dog. All rights reserved.
          </p>
          <p className="text-sm text-white/70">
            Story by Phil Carey | Illustrations by Marcin Piwowarski
          </p>
        </div>
      </div>
    </footer>
  )
}
