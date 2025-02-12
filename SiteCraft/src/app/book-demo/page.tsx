
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookDemo() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <main className="min-h-screen bg-ocean-gradient py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white border-2 border-blue-300 rounded-xl p-8 mt-4 shadow-xl animate-fadeIn">
            <h4 className="text-3xl font-black mb-4 glow-blue">🎉 Welcome to the Globolosys Family!</h4>
            <p className="text-xl font-bold">Thank you for your interest in developing a website for your brand! Our team will reach out to you soon at {email}. Together, we'll create something extraordinary! ✨</p>
            <div className="flex gap-4 justify-center mt-6">
              <span className="text-white animate-bounce text-2xl">💡</span>
              <span className="text-white animate-bounce delay-100 text-2xl">🌟</span>
              <span className="text-white animate-bounce delay-200 text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ocean-gradient py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-12 text-blue-600 glow-blue">Book a Demo</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-blue-900 font-black mb-2">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-blue-900 font-black mb-2">Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-blue-900 font-black mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-blue-900 font-black mb-2">Country *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-blue-900 font-black mb-2">Address *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-900 font-black mb-2">Project Description *</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your project requirements..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xl py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Start Your Free Trial 🚀
          </button>
        </form>
      </div>
    </main>
  );
}
