export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-700/30 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] left-[-100px] w-[320px] h-[320px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-8 lg:py-0 min-h-screen flex flex-col lg:flex-row items-center justify-between relative z-10 gap-16 lg:gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 pt-24 lg:pt-0 text-center lg:text-left">

          {/* TOP BRAND */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">

            {/* Logo */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-500/30 border border-purple-400/20 shrink-0">

              <span className="text-white text-2xl font-black">
                W
              </span>

            </div>

            {/* Brand Content */}
            <div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-[3px] leading-none">
                WEBCRAFT
              </h2>

              <p className="text-sm sm:text-base text-gray-300 mt-1">
                Professional Websites For Modern Businesses
              </p>

            </div>

          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm text-xs sm:text-sm text-gray-300 mb-7">

            <span className="w-2 h-2 bg-green-400 rounded-full"></span>

            Fast • Modern • Mobile Friendly Websites

          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">

            Get grow Your Business
            <br />

            Online With A

            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Professional Website
            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">

            We create modern, fast and affordable websites
            that help your business attract more customers,
            build trust and grow professionally online.

          </p>

          {/* Hindi + English Line */}
          <div className="mt-5 space-y-2">

            <p className="text-purple-400 text-sm sm:text-base md:text-lg font-medium">
              We provide affordable business websites with premium modern designs.
            </p>

            <p className="text-gray-500 text-xs sm:text-sm">
              
            </p>

          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mt-8">

            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-gray-300">
              ⚡ Fast Delivery
            </div>

            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-gray-300">
              📱 Mobile Responsive
            </div>

            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-gray-300">
              💎 Premium Design
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 justify-center lg:justify-start">

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="px-7 sm:px-8 py-3 sm:py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold shadow-xl shadow-purple-500/20 hover:scale-105 text-sm sm:text-base text-center"
            >
              Get Your Website
            </a>

            {/* WORK BUTTON */}
            <button className="px-7 sm:px-8 py-3 sm:py-4 rounded-2xl border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 font-semibold text-sm sm:text-base">
              View Our Work
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center relative">

          {/* Glow */}
          <div className="absolute w-[280px] sm:w-[380px] md:w-[450px] lg:w-[520px] h-[280px] sm:h-[380px] md:h-[450px] lg:h-[520px] bg-purple-600/30 blur-[120px] rounded-full"></div>

          {/* Image */}
          <img
            src="/logo.png"
            alt="Website Preview"
            className="relative z-10 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[600px] rounded-[28px] border border-zinc-800 shadow-2xl hover:scale-[1.02] transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}