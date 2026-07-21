import type { Metadata } from "next"
import TeamSection from "@/sections/TeamSection"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the hilooyoon team and watch our featured videos.",
  openGraph: {
    title: "Team | hilooyoon",
    description: "Meet the hilooyoon team and watch our featured videos.",
    type: "website",
  },
}

export default function TeamPage() {
  return <TeamSection />
}
