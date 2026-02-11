'use client'

import Image from 'next/image'
import { Scale, Users, Award, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Scale,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Clients Served',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Client Support',
    },
  ]

  const values = [
    {
      title: 'Personalized Attention',
      description: 'Every case receives individualized care and strategy tailored to your unique circumstances.',
    },
    {
      title: 'Clear Communication',
      description: 'We explain complex legal matters in plain language, keeping you informed every step of the way.',
    },
    {
      title: 'Client Advocacy',
      description: 'Your interests come first. We fight tirelessly to protect your rights and achieve the best outcome.',
    },
  ]

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/about-background-1770826638654.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-secondary-500 mb-6">
              Dedicated to Your
              <span className="block font-semibold text-primary-500 mt-2">Legal Success</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mb-8"></div>
            <div className="space-y-6 text-secondary-500/80 leading-relaxed">
              <p className="text-lg">
                The Law Office of Justice B Adjei has been serving the Port Arthur community with integrity and excellence for over a decade. We understand that facing legal challenges can be overwhelming, which is why we're committed to providing not just expert representation, but genuine support through difficult times.
              </p>
              <p>
                Our approach is built on a simple philosophy: your legal matters deserve personal attention from an experienced attorney who truly cares about your outcome. We don't believe in one-size-fits-all solutions or intimidating legal jargon. Instead, we take the time to understand your unique situation and develop strategies that protect your interests.
              </p>
              <p>
                Whether you're navigating family law matters, facing criminal charges, dealing with personal injury, or need guidance on civil litigation, we bring the same level of dedication and expertise to every case. Our track record speaks for itself, but what truly sets us apart is our commitment to being accessible, responsive, and transparent throughout your legal journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:border-primary-500/20 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <div className="text-3xl font-light text-secondary-500 mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary-500/60 font-light">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-secondary-500 mb-4">Our Commitment to You</h3>
            <p className="text-secondary-500/60 max-w-2xl mx-auto">
              These principles guide everything we do, ensuring you receive the highest quality legal representation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block w-12 h-0.5 bg-accent-500 mb-6 group-hover:w-20 transition-all duration-300"></div>
                <h4 className="text-xl font-semibold text-primary-500 mb-4">{value.title}</h4>
                <p className="text-secondary-500/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}