import Link from "next/link"

const getPixelColor = (index: number) => {
  if (index % 11 === 0) return "bg-purple-500"
  if (index % 13 === 0) return "bg-yellow-400"
  if (index % 17 === 0) return "bg-blue-500"
  if (index % 7 === 0) return "bg-purple-500"
  return "bg-gray-200"
}

export default function HeroSection() {
  return (
    <section className="bg-white pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-24 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400/80 rounded-full"></div>
      <div className="hidden sm:block absolute top-32 right-32 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/80 rounded-sm transform rotate-45"></div>
      <div className="hidden sm:block absolute top-40 right-16 w-1 h-6 sm:w-2 sm:h-8 bg-purple-500/70"></div>
      <div className="hidden sm:block absolute top-48 right-24 w-4 h-1 sm:w-6 sm:h-2 bg-yellow-400/80"></div>

      <div className="container mx-auto pl-2 pr-2 sm:pl-4 sm:pr-4 lg:pl-6 lg:pr-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-left">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 mb-4 sm:mb-6">
              AI MASTERY & DEEP DOMAIN EXPERTISE
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-4 sm:mb-6">
              We put AI exactly where your business accelerates
              <span className="block mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Put where it matters. Driven by masters.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-600 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              Most businesses try AI everywhere and hope something works. We know exactly where it belongs in your business and tech — and we put it there, fast.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 mb-10 sm:mb-14">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full sm:w-auto min-w-[280px] items-center justify-center whitespace-nowrap rounded-lg bg-[#ce2124] px-6 text-base font-semibold text-white hover:bg-[#b81d20] transition-colors"
              >
                Talk to an AI Consultant
              </Link>
              <Link
                href="/packages"
                className="inline-flex h-12 w-full sm:w-auto min-w-[220px] items-center justify-center rounded-lg border border-zinc-300 bg-transparent px-6 text-base font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
              >
                See Our Packages
              </Link>
            </div>

            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Trusted by growing SMBs and Mid-Market teams
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* AI Dashboard Card */}
            <div className="relative bg-[#182131] rounded-xl sm:rounded-2xl border border-[#2a3448] p-4 sm:p-6 shadow-2xl transform rotate-6 sm:rotate-12 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto lg:max-w-none">
              <div className="text-white mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm text-white/85 mb-1 sm:mb-2">Neural Live</div>
                <div className="text-xs text-white/70">AI Dashboard</div>
              </div>

              {/* Pixelated pattern - responsive grid */}
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 48 }, (_, i) => (
                  <div key={i} className={`w-2 h-2 sm:w-3 sm:h-3 ${getPixelColor(i)}`} />
                ))}
              </div>

              <div className="flex justify-between items-center text-white text-xs sm:text-sm">
                <div>
                  <div className="mb-1">AI Model: GPT-4</div>
                  <div className="text-white/70 text-xs">Status: Active</div>
                </div>
                <div className="text-right">
                  <div className="mb-1">Accuracy: 99.2%</div>
                  <div className="text-white/70 text-xs">Response: 0.3s</div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements - smaller on mobile */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-lg transform rotate-45"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full"></div>
            <div className="hidden sm:block absolute top-1/2 -right-8 w-4 h-12 bg-purple-500"></div>

            {/* Scattered pixels - hidden on mobile */}
            <div className="hidden sm:block absolute top-8 right-8 w-2 h-2 bg-purple-400"></div>
            <div className="hidden sm:block absolute bottom-12 left-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="hidden sm:block absolute top-16 left-12 w-2 h-6 bg-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}










