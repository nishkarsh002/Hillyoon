import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
]

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/hillyoonexports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/hillyoonexports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/hillyoonexports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
  label: "LinkedIn",
  href: "https://linkedin.com/company/hillyoonexports",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2a4 4 0 0 1 4-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
},
]

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/imgs/logo-bg.png"
                alt="hillyoon"
                width={260}
                height={90}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-5">
              Premium Apparel Manufacturing &amp; Global Export Company.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-neutral-300 hover:text-[#c8a96e] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="mailto:info@hillyoonexports.com" className="hover:text-[#c8a96e] transition-colors duration-200">
                  info@hillyoonexports.com
                </a>
              </li>
              <li>
                <a href="tel:+919718994500" className="hover:text-[#c8a96e] transition-colors duration-200">
                  +91 97189 94500
                </a>
              </li>
              <li>
                <a href="https://www.hillyoon.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a96e] transition-colors duration-200">
                  www.hillyoon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Hillyoon Exports. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600 italic">"Crafting Quality Apparel for Global Markets."</p>
        </div>
      </div>
    </footer>
  )
}
