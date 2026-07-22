"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white border-b border-[var(--border)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="/" aria-label="hillyoon home" className="flex items-center shrink-0 gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm shadow-black/5">
            <Image
              src="/imgs/favicon_io (4)/favicon-32x32.png"
              alt="hillyoon favicon"
              width={32}
              height={32}
              className="rounded-lg"
            />
          </div>
          <div>
            {/* <p className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold leading-none">Hillyoon</p> */}
            <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c8a96e] to-neutral-900 tracking-widest">
              HILLYOON
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)] pb-0.5 ${
                  pathname === href
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-neutral-700"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-900 transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-900 transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-900 transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}
      >
        <ul className="flex flex-col bg-white border-t border-[var(--border)] px-4 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium py-2.5 px-2 rounded transition-colors duration-200 ${
                  pathname === href
                    ? "text-[var(--accent)] bg-[var(--muted)]"
                    : "text-neutral-700 hover:text-[var(--accent)] hover:bg-[var(--muted)]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
