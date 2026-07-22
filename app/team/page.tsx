import type { Metadata } from "next"
import TeamSection from "@/sections/TeamSection"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the hillyoon team and watch our featured videos.",
  openGraph: {
    title: "Team | hillyoon",
    description: "Meet the hillyoon team and watch our featured videos.",
    type: "website",
  },
}

export default function TeamPage() {
  return <TeamSection />
}
