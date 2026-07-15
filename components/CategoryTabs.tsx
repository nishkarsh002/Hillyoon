"use client"

import { useState } from "react"
import Link from "next/link"
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"

// Build category counts
const categories = Array.from(new Set(products.map((p) => p.category))).sort()
const allCategories = [...categories, "All"]

const countByCategory: Record<string, number> = { All: products.length }
products.forEach((p) => {
  countByCategory[p.category] = (countByCategory[p.category] ?? 0) + 1
})

export default function CategoryTabs() {
  const [active, setActive] = useState("T-Shirts")

  const filtered = active === "All" ? products : products.filter((p) => p.category === active)

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Heading */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            Browse by Category
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Our Products
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === cat
                  ? "bg-[#c8a96e] border-[#c8a96e] text-white"
                  : "bg-white border-neutral-200 text-neutral-600 hover:border-[#c8a96e] hover:text-[#c8a96e]"
              }`}
            >
              {cat}
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                  active === cat ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {countByCategory[cat] ?? 0}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c8a96e] hover:text-[#a8893e] transition-colors duration-200"
          >
            View full catalogue
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
