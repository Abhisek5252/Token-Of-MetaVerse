'use client';

import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-300 hover:text-blue-400 transition-all">
          Website Design Packages
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Starter Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Starter Package</h3>
            <div className="text-3xl font-bold text-blue-300 mb-6">$28/month</div>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Basic website design
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Up to 5 pages
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Mobile responsive design
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Contact form integration
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Basic SEO setup
              </li>
            </ul>
          </div>

          {/* Business Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Business Package</h3>
            <div className="text-3xl font-bold text-blue-300 mb-6">$500/month</div>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Advanced website design
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Up to 10 pages
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Custom animations
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Advanced SEO optimization
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                3 months support
              </li>
            </ul>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Premium Package</h3>
            <div className="text-3xl font-bold text-blue-300 mb-6">$700/month</div>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Premium website design
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited pages
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                E-commerce integration
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Custom functionality
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                6 months support
              </li>
            </ul>
          </div>

          {/* Custom Enterprise Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-400">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Enterprise Custom</h3>
            <div className="text-3xl font-bold text-blue-300 mb-6">Starting at $1999/month</div>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Everything in Premium
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Custom Development
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Priority Support 24/7
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated Project Manager
              </li>
              <li className="flex items-center text-blue-300">
                <span className="text-green-500 mr-2">✓</span>
                Enterprise Security
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/book-demo"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:-translate-y-1 transition-all duration-300 hover:bg-blue-700"
          >
            Start Free Trial
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-blue-300 mb-8">Enterprise Features Include</h3>
          <div className="grid md:grid-cols-3 gap-6 text-blue-300 text-lg">
            <div>Advanced Analytics Integration</div>
            <div>Custom API Development</div>
            <div>Load Balancing</div>
            <div>Database Optimization</div>
            <div>Custom Security Protocols</div>
            <div>Automated Backups</div>
            <div>Performance Monitoring</div>
            <div>Scalability Planning</div>
            <div>Custom Integration Solutions</div>
          </div>
        </div>
      </div>
    </main>
  );
}