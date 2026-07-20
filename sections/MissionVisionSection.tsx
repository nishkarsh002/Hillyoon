import { mission, vision } from "@/data/company"

const strengths = [
  "High-Quality Manufacturing Standards",
  "Competitive Pricing Structure",
  "Dedicated Sampling Team",
  "Flexible MOQ Options",
  "Advanced Embroidery & Printing Facilities",
  "Strict Quality Inspection Process",
  "On-Time Delivery Commitment",
  "Global Logistics & Export Support",
]

export default function MissionVisionSection() {
  return (
    <section className="py-12 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            What Drives Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
            <div className="w-10 h-10 rounded-full bg-[#c8a96e] flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{mission}</p>
          </div>

          {/* Vision */}
          <div className="bg-[var(--foreground)] rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-[#c8a96e] flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-base text-neutral-400 leading-relaxed">{vision}</p>
          </div>
        </div>

        {/* Our Strengths */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Our Strengths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.map((s) => (
              <div key={s} className="flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-sm text-neutral-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
