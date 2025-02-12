
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-ocean-gradient">
      {/* Hero Section with Email Signup */}
      <div className="w-full py-24 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-4xl font-bold text-cyberpunk mb-12">
            Create Your Professional Website Today
          </p>

          {/* Email Input and Trial Button */}
          <div className="max-w-xl mx-auto mb-8">
            <Link
              href="/book-demo"
              className="bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 text-white px-12 py-6 rounded-lg font-black text-2xl shadow-lg border-2 border-blue-400 hover:shadow-xl inline-block"
            >
              Start Free Trial 🚀
            </Link>
          </div>
          <p className="text-xl text-cyan-400 mb-12 font-black uppercase">
            TRY GLOBOLOSYS FREE FOR 3 DAYS, NO CREDIT CARD REQUIRED
          </p>
        </div>
      </div>

      {/* Features Overview */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center group">
            <h3 className="text-3xl font-black text-ocean-gradient mb-4 uppercase animate-pulse">
              Drag-and-Drop Builder
            </h3>
            <p className="text-blue-700 text-xl font-extrabold">Create beautiful websites without any coding knowledge</p>
          </div>
          <div className="text-center group">
            <h3 className="text-3xl font-black text-ocean-gradient mb-4 uppercase animate-pulse">
              Professional Templates
            </h3>
            <p className="text-blue-700 text-xl font-extrabold">Choose from hundreds of customizable templates</p>
          </div>
          <div className="text-center group">
            <h3 className="text-3xl font-black text-ocean-gradient mb-4 uppercase animate-pulse">
              24/7 Support
            </h3>
            <p className="text-blue-700 text-xl font-extrabold">Get help whenever you need it</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/pricing"
            className="btn-ocean inline-block text-white px-16 py-6 rounded-lg font-black text-2xl uppercase shadow-lg border-4 border-blue-300 bg-white text-blue-700 hover:bg-blue-50"
          >
            View Pricing
          </Link>
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-black text-blue-800 mb-8">
            Globolosys Developer – Your Custom Web Development Partner
          </h2>
          <p className="text-xl text-blue-700 mb-12 leading-relaxed">
            At Globolosys Developer, we specialize in crafting custom-built websites that bring your brand's vision to life. Whether you need a sleek e-commerce store, a dynamic business website, or a fully tailored web solution, we provide cutting-edge technology and user-friendly designs to elevate your online presence.
          </p>

          <h3 className="text-3xl font-black text-blue-800 mb-6">Why Choose Globolosys Developer?</h3>
          <ul className="text-xl text-blue-700 space-y-4 mb-12">
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <span>Custom Web Solutions – Designed specifically to fit your business needs.</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <span>Responsive & Fast – Optimized for all devices and seamless user experience.</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <span>SEO & Performance Focused – Ensuring maximum visibility and engagement.</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <span>Scalable & Secure – Future-ready websites with top-tier security.</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <span>End-to-End Development – From design to deployment, we handle everything.</span>
            </li>
          </ul>

          <h3 className="text-3xl font-black text-blue-800 mb-6">
            🚀 Let's Build Something Great Together!
          </h3>
          <p className="text-2xl font-bold text-blue-700">
            Transform your ideas into a powerful website with Globolosys Developer.
          </p>
        </div>
      </div>
    </main>
  );
}
