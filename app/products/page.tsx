import type { Metadata } from "next"
import ProductGridSection from "@/sections/ProductGridSection"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the full hillyoon product catalogue — wholesale apparel by category.",
  openGraph: {
    title: "Products | hillyoon",
    description: "Browse the full hillyoon product catalogue.",
    type: "website",
  },
}

export default function ProductsPage() {
  return <ProductGridSection products={products} />
}
