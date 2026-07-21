import { companyStory } from "@/data/company"
import Image from "next/image"

export default function CompanyStorySection() {
  const paragraphs = companyStory
    .trim()
    .split("\n\n")
    .filter((p) => p.trim().length > 0)

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              Hillyoon Exports
            </h2>
            <p className="mt-1 text-base text-[#c8a96e] font-medium">
              Premium Apparel Manufacturing &amp; Global Export Company
            </p>
            <div className="mt-6 space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-base text-neutral-600 leading-relaxed">
                  {para.trim()}
                </p>
              ))}
            </div>

            

            {/* Export regions */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                We Export To
              </p>
              <div className="flex flex-wrap gap-2">
                {["Europe", "United Kingdom", "United States", "Middle East", "Africa", "Asia-Pacific"].map((region) => (
                  <span
                    key={region}
                    className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-medium"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual: muted autoplay video */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-neutral-100">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.9 }}
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="relative z-10 p-6 h-full flex items-end">
              <p className="text-sm text-white/90 font-medium">Our production & quality standards in action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
