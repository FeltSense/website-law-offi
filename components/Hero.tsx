'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hero-1770826629002.png"
          alt="Law Office of Justice B Adjei"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-secondary-500 opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-block text-accent-500 font-medium text-sm sm:text-base tracking-wide uppercase mb-6">
              Law Office Of Justice B Adjei
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experienced, dedicated legal representation{' '}
            <span className="font-semibold text-primary-300">
              serving Port Arthur
            </span>{' '}
            with personalized attention to your unique legal needs
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed mb-12 max-w-3xl transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Trusted legal counsel committed to protecting your rights and guiding you through every step of your legal journey.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Primary CTA */}
            <Link
              href="tel:+1 409-963-1955"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Call Now: +1 409-963-1955
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}