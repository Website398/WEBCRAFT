"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    googleBusiness: "",
    websiteType: "",
    budget: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Phone validation
    if (name === "phone") {
      value = value.replace(/\D/g, "");

      if (value.length > 10) return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // phone check
    if (form.phone.length !== 10) {
      alert("Enter valid 10-digit number");
      return;
    }

    setLoading(true);

    try {
      await push(ref(db, "leads"), {
        ...form,
        phone: "+91 " + form.phone,
        createdAt: new Date().toISOString(),
      });

      setForm({
        name: "",
        phone: "",
        business: "",
        googleBusiness: "",
        websiteType: "",
        budget: "",
        requirements: "",
      });

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-zinc-100 py-16 md:py-24 px-4 flex justify-center relative scroll-mt-24"
    >
      <div className="w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-black text-white p-8 sm:p-10 lg:p-14 flex flex-col justify-center">

          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Let’s Build Your
            <br />
            Business Website 🚀
          </h2>

          <p className="mt-6 text-purple-100 text-sm sm:text-base leading-7">
            We create modern, fast and mobile responsive websites
            for local businesses at affordable prices.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 lg:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
            Tell Us About Your Business
          </h2>

          <div className="space-y-4 mt-8">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border border-zinc-300 rounded-2xl"
              required
            />

            {/* PHONE */}
            <div className="flex gap-3">

              <div className="px-4 flex items-center justify-center bg-zinc-100 rounded-2xl border border-zinc-300">
                +91
              </div>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10 Digit Number"
                className="w-full p-4 border border-zinc-300 rounded-2xl"
                required
              />
            </div>

            <input
              name="business"
              value={form.business}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full p-4 border border-zinc-300 rounded-2xl"
              required
            />

            <input
              name="googleBusiness"
              value={form.googleBusiness}
              onChange={handleChange}
              placeholder="Google Business Profile URL"
              className="w-full p-4 border border-zinc-300 rounded-2xl"
            />

            <select
              name="websiteType"
              value={form.websiteType}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-300 rounded-2xl"
              required
            >
              <option value="">Select Website Type</option>
              <option>Business Website</option>
              <option>Restaurant Website</option>
              <option>Fitness Website</option>
              <option>Hospital Website</option>
            </select>

            {/* BUDGET */}
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-300 rounded-2xl"
              required
            >
              <option value="">Choose Plan</option>

              <option value="Basic - ₹2500 to ₹3000">
                Basic - ₹2500 to ₹3000
              </option>

              <option value="Professional - ₹4000">
                Professional - ₹4000
              </option>

              <option value="Premium - ₹5000">
                Premium - ₹5000
              </option>
            </select>

            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              placeholder="Tell us your requirements..."
              rows="4"
              className="w-full p-4 border border-zinc-300 rounded-2xl resize-none"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-semibold"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-sm w-full">

            <div className="text-5xl mb-4">🎉</div>

            <h2 className="text-2xl font-black text-green-600">
              Thank You!
            </h2>

            <p className="text-gray-500 mt-3">
              Your request has been submitted successfully.
              Our team will contact you soon 🚀
            </p>

          </div>

        </div>
      )}
    </section>
  );
}