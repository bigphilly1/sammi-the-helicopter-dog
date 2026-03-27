# Sammi The Helicopter Dog — Website

## What This Project Is
The official website for "Sammi The Helicopter Dog: My First Flight" (Book 1 of the Sammi series) by Phil Carey. Single-page marketing site. Goal: sell the book, build the Sammi brand, and lay the foundation for a franchise.

## Stack
- **Framework**: Next.js (App Router)
- **Hosting**: Vercel — free tier. Deploy on push to `main`.
- **Database**: None. No Supabase. Email subscribers go directly to Flodesk.
- **Email / subscribers**: Flodesk. Segment name: `Sammi —`
- **Payments**: Not applicable (retailer links only — Amazon, Booktopia, etc.)
- **Version control**: GitHub. Vercel auto-deploys on `main`.

## Environment Variables Required
```
FLODESK_API_KEY         # Secret. Flodesk API key. Server-only. Never NEXT_PUBLIC_.
FLODESK_SEGMENT_ID      # The Flodesk segment ID for "Sammi —" subscribers.
```

Set these in Vercel → Settings → Environment Variables for Production.

## Architecture
Single-page app. All sections are components in `/components/`. Page order in `app/page.tsx`:
1. `NavigationSection` — fixed top nav with anchor links
2. `HeroSection` — book cover, tagline, Amazon star badge (links to real reviews)
3. `AboutBookSection` — story summary + three theme cards
4. `PreviewSection` — carousel of interior spreads with captions
5. `AuthorSection` — Phil Carey bio (with credential badges) + Marcin Piwowarski bio + Dedication (prominent)
6. `ReviewsSection` — links to real Amazon reviews only. No placeholder/unverified quotes.
7. `BuySection` — signed copy CTA first, then Amazon AU, Booktopia, Barnes & Noble, BookLoop. Pricing shows "Check price" (retailer sets it).
8. `EducatorSection` — school/library pathway: classroom use, author visits, review copies
9. `NewsletterSection` — Flodesk sign-up + Instagram CTA
10. `Footer`
11. `FreeBookPopup` — honest copy: "join the club" for Book 2 news + giveaway alerts (not "we give away every week")

## Key Constraints
- **No placeholder reviews.** Reviews section must only show real, verifiable quotes linked to Amazon. Currently shows the Amazon listing link directly.
- **No hardcoded pricing.** Pricing was $23.48/$11.11 in the original — now shows "Check price" to avoid drift from retailer pages.
- **Popup must be honest.** Original said "every week we give away a free copy" — that's a binding commitment. The popup now says "be first to hear about giveaways."
- **Flodesk only for email.** Per the standard workflow, subscribers must never be stored in a separate database (old Supabase route has been removed).

## Retailer Links
- Signed copy: `mailto:sammithehelicopterdog@gmail.com`
- Amazon AU: `https://www.amazon.com.au/Sammi-Helicopter-Dog-First-Flight/dp/0645417122`
- Booktopia: `https://www.booktopia.com.au/sammi-the-helicopter-dog/book/9780645417128.html`
- Barnes & Noble: `https://www.barnesandnoble.com/w/sammi-the-helicopter-dog-my-first-flight-phil-carey/1141019033`
- BookLoop: `https://www.bookloop.com.au/product/sammi-the-helicopter-dog-my-first-flight/`

## Contact / Social
- Email: `sammithehelicopterdog@gmail.com`
- Instagram: `@sammithehelicopterdog`

## Pre-Launch Checklist (from Standard Workflow)
- [ ] All buy buttons link to real retailer URLs
- [ ] Flodesk API key and segment ID set in Vercel production environment
- [ ] No placeholder content, test routes, or lorem ipsum anywhere
- [ ] FLODESK_API_KEY confirmed working with a test sign-up
- [ ] Booktopia URL confirmed live for this ISBN
- [ ] Amazon star badge links to real customer reviews
- [ ] Popup copy is accurate and does not make commitments Phil cannot keep
- [ ] No console logs or debug code in production files

## Franchise Roadmap (future sessions)
- Series page / Book 2 landing page
- Activity download (colouring pages, read-aloud tips)
- Press / media page
- "As seen in" strip as coverage builds
- Instagram feed embed or real-Sammi content section
