export default function Pricing() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20">

      <div className="text-center max-w-3xl mx-auto">

        <p className="text-purple-400 font-medium text-sm sm:text-base mb-3">
          AFFORDABLE PRICING
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
          Simple Pricing For
          <span className="text-purple-500 block">
            Your Business Website
          </span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mb-10 md:mb-14">
          Affordable websites for clinics, restaurants, gyms and local businesses.
        </p>
      </div>

      {/* PLANS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* BASIC */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition">

          <h3 className="text-xl sm:text-2xl font-bold">Basic</h3>
          <p className="text-gray-400 text-sm mt-2">Best for small businesses</p>

          <p className="text-gray-500 text-xs mt-5">Approx range</p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-500">
            ₹2500 - ₹3000
          </div>

          <ul className="mt-6 space-y-3 text-gray-300 text-sm sm:text-base">
            <li>✔ Clean design</li>
            <li>✔ Mobile responsive</li>
            <li>✔ Contact form</li>
            <li>✔ WhatsApp button</li>
          </ul>

          <a
            href="#contact"
            className="block mt-8 bg-purple-600 hover:bg-purple-700 text-center py-3 rounded-xl font-semibold"
          >
            Get Started
          </a>
        </div>

        {/* PROFESSIONAL */}
        <div className="bg-purple-600 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-500/30">

          <div className="bg-white text-black inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
            MOST POPULAR
          </div>

          <h3 className="text-xl sm:text-2xl font-bold">Professional</h3>
          <p className="text-purple-100 text-sm mt-2">Perfect for growing businesses</p>

          <p className="text-purple-100 text-xs mt-5">Approx range</p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
            ₹4000
          </div>

          <ul className="mt-6 space-y-3 text-white text-sm sm:text-base">
            <li>✔ Premium design</li>
            <li>✔ Firebase form</li>
            <li>✔ Gallery section</li>
            <li>✔ WhatsApp integration</li>
          </ul>

          <a
            href="#contact"
            className="block mt-8 bg-white text-purple-700 text-center py-3 rounded-xl font-semibold hover:bg-gray-100"
          >
            Choose Plan
          </a>
        </div>

        {/* PREMIUM */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition">

          <h3 className="text-xl sm:text-2xl font-bold">Premium</h3>
          <p className="text-gray-400 text-sm mt-2">Full business website</p>

          <p className="text-gray-500 text-xs mt-5">Approx range</p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-500">
            ₹5000
          </div>

          <ul className="mt-6 space-y-3 text-gray-300 text-sm sm:text-base">
            <li>✔ Custom design</li>
            <li>✔ Animations</li>
            <li>✔ Testimonials</li>
            <li>✔ Priority support</li>
          </ul>

          <a
            href="#contact"
            className="block mt-8 bg-purple-600 hover:bg-purple-700 text-center py-3 rounded-xl font-semibold"
          >
            Contact Now
          </a>
        </div>

      </div>

      {/* NOTE */}
      <div className="text-center mt-12 md:mt-16">
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Choose a plan and fill the form. We will contact you and start your website development.
        </p>
      </div>

    </section>
  );
}