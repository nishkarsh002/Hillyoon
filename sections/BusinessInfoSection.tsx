export default function BusinessInfoSection() {
  return (
    <section className="py-12 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-1">Business Information</h2>
          <p className="text-sm text-neutral-500 mb-8">Hillyoon Exports — Premium Apparel Manufacturing &amp; Global Export</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Email */}
            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1.5">Email</h3>
              <a href="mailto:info@hillyoonexports.com" className="text-sm font-medium text-neutral-900 hover:text-[#c8a96e] transition-colors duration-200 break-all">
                info@hillyoonexports.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.7 3.42 2 2 0 0 1 3.67 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.99 5.99l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1.5">Mobile</h3>
              <a href="tel:+919718994500" className="text-sm font-medium text-neutral-900 hover:text-[#c8a96e] transition-colors duration-200">
                 +91 97189 94500
              </a>
            </div>

            {/* Website */}
            <div className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1.5">Website</h3>
              <a href="https://www.hillyoon.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-900 hover:text-[#c8a96e] transition-colors duration-200">
                www.hillyoon.com
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-6 p-5 bg-white rounded-2xl border border-[var(--border)]">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/hillyoonexports" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-700 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a href="https://facebook.com/hillyoonexports" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-700 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <a href="https://x.com/hillyoonexports" target="_blank" rel="noopener noreferrer" aria-label="X"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-700 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X (Twitter)
              </a>
              <a
  href="https://linkedin.com/company/hillyoonexports"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-700 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V23h-4V8zm7 0h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.09c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75V23h-4V8z" />
  </svg>
  LinkedIn
</a>
            </div>
          </div>

          <div className="mt-4 p-5 bg-white rounded-2xl border border-[var(--border)] text-center">
            <p className="text-sm font-medium text-neutral-900 italic">
              "Crafting Quality Apparel for Global Markets."
            </p>
            <p className="mt-1.5 text-xs text-neutral-500">
              We typically respond within <span className="font-medium text-neutral-900">1–2 business days</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
