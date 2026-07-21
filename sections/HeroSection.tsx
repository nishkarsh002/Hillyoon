"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    id: 1,
    pre: "Effortless",
    title: "Hilooyoon Essentials",
    cta: "Shop Essentials",
    img: "/imgs/tshirt_p.jpeg",
  },
  {
    id: 2,
    pre: "Premium",
    title: "WORKWEAR",
    cta: "Browse Workwear",
    img: "/imgs/hoodies_p.jpeg",
  },
  {
    id: 3,
    pre: "New",
    title: "CORE COLLECTION",
    cta: "See The Range",
    href: "/products",
    img: "/imgs/hoodie2.jpeg",
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    startAuto()
    return stopAuto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function startAuto() {
    stopAuto()
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function goTo(i: number) {
    setIndex(i)
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length)
  }

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    stopAuto()
  }

  function onTouchEnd(e: React.TouchEvent) {
    const endX = e.changedTouches[0].clientX
    const startX = touchStartX.current
    if (startX == null) return
    const diff = startX - endX
    if (Math.abs(diff) > 40) {
      if (diff > 0) next()
      else prev()
    }
    startAuto()
  }

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center bg-black overflow-hidden"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image src={s.img} alt={s.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="mx-auto max-w-6xl px-6 py-28 flex flex-col items-center text-center">
          <p className="text-sm tracking-widest text-white/70 uppercase mb-6">{slides[index].pre}</p>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
            {slides[index].title}
          </h2>

          {/* Indicators */}
          <div className="mt-10 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white/90 scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
      >
        ›
      </button>
    </section>
  )
}