"use client"

import React from "react"

const showcaseItems = [
  {
    title: "Craftsmanship",
    subtitle: "Premium apparel quality",
    image: "/imgs/tshirt.jpeg",
  },
  {
    title: "Innovation",
    subtitle: "Modern style and fit",
    image: "/imgs/hoodie.jpeg",
  },
  {
    title: "Reliability",
    subtitle: "Consistent bulk delivery",
    image: "/imgs/trouser.jpeg",
  },
]

export function Skiper16() {
  return (
    <section className="mx-auto mb-12 max-w-6xl rounded-3xl border border-[var(--border)] bg-[var(--muted)]/40 p-6 sm:p-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96e]">
          Team Showcase
        </p>
        <h3 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
          The spirit behind our collections
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {showcaseItems.map((item) => (
          <div key={item.title} className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
            <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-neutral-900">{item.title}</h4>
              <p className="mt-1 text-sm text-neutral-600">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skiper16
