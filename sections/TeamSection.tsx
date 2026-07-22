import Image from "next/image"

const team = [
  {
    name: "Mr. Shahrukh Khan",
    role: "Founder & CEO – Hillyoon Exports",
    bio: "Welcome to Hillyoon Exports. Our vision is to deliver premium apparel and clothing solutions to global markets with quality, reliability, and innovation. We are committed to building strong international partnerships through excellence in manufacturing, timely delivery, and customer satisfaction. At Hillyoon Exports, we believe in creating value, trust, and long-term business relationships across the world. Thank you for being part of our journey toward global success.",
    image: "/imgs/ceo.png",
    initials: "SK",
  },
  {
    name: "Zara Khan",
    role: "Head of Export Operations",
    bio: "Zara oversees all export logistics, client relations, and international partnerships. Her expertise in global supply chains ensures every order reaches our partners on time and to spec.",
    image: null, // Replace with "/imgs/team-zara.jpg" when available
    initials: "ZK",
  },
]

export default function TeamSection() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            The People Behind It
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Our Team
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-xl mx-auto">
            Meet the team driving Hillyoon Exports forward — passionate about quality apparel and
            long-term global partnerships.
          </p>
        </div>

        {/* Team videos */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-neutral-900 shadow-xl shadow-black/10">
            <div className="border-b border-white/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-white">Team Story</h3>
              <p className="mt-1 text-sm text-neutral-300">Watch how our team brings every collection to life.</p>
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-80 w-full object-cover"
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-neutral-900 shadow-xl shadow-black/10">
            <div className="border-b border-white/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-white">Production Process</h3>
              <p className="mt-1 text-sm text-neutral-300">Get a behind-the-scenes look at our manufacturing workflow.</p>
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-80 w-full object-cover"
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-[var(--border)] hover:shadow-lg hover:border-[#c8a96e] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-neutral-100 mb-5 shrink-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[var(--foreground)]">
                    <span className="text-xl font-bold text-[#c8a96e]">{member.initials}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
              <p className="text-sm text-[#c8a96e] font-medium mt-1">{member.role}</p>
              <p className="text-sm text-neutral-500 leading-relaxed mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
