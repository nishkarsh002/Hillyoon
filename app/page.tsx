import type { Metadata } from "next"
import HeroSection from "@/sections/HeroSection"
import FeaturedProductsSection from "@/sections/FeaturedProductsSection"
import CategoryTabs from "@/components/CategoryTabs"
import AboutPreviewSection from "@/sections/AboutPreviewSection"
import CTASection from "@/sections/CTASection"

export const metadata: Metadata = {
  title: "Home",
  description: "Discover hilooyoon — premium B2B clothing for businesses and wholesalers.",
  openGraph: {
    title: "hilooyoon — Home",
    description: "Discover hilooyoon — premium B2B clothing for businesses and wholesalers.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <CategoryTabs />
      <AboutPreviewSection />
      <CTASection />
    </>
  )
}
