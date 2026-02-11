'use client'

import { Scale, FileText, Users, Home, Car, Briefcase } from 'lucide-react'

interface ServiceCard {
  icon: React.ElementType
  title: string
  description: string
}

const services: ServiceCard[] = [
  {
    icon: Scale,
    title: 'Personal Injury',
    description: 'Advocating for injury victims to secure fair compensation for medical expenses, lost wages, and pain and suffering.'
  },
  {
    icon: Car,
    title: 'Auto Accidents',
    description: 'Expert representation for car accident cases, handling insurance claims and fighting for the settlement you deserve.'
  },
  {
    icon: Briefcase,
    title: 'Workers Compensation',
    description: 'Protecting your rights after workplace injuries and ensuring you receive full benefits under the law.'
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Comprehensive guidance for property transactions, disputes, and contract negotiations to protect your investment.'
  },
  {
    icon: FileText,
    title: 'Contract Disputes',
    description: 'Strategic resolution of contract disagreements through negotiation, mediation, or litigation when necessary.'
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Compassionate support through divorce, custody matters, and family legal issues with personalized attention.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-secondary-500 mb-6">
            Legal Services We Provide
          </h2>
          <p className="text-lg text-secondary-500/70 font-light leading-relaxed">
            Whether you're facing a personal injury claim, navigating a complex contract, or dealing with family matters, we deliver focused legal representation tailored to your specific situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-secondary-500/10 rounded-sm p-8 hover:border-primary-500/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-500" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-normal text-secondary-500 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-secondary-500/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-secondary-500/70 font-light mb-8 max-w-2xl mx-auto">
            Don't see your specific legal need listed? We handle a wide range of cases and are here to help you find the right solution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-normal rounded-sm hover:bg-primary-500/90 transition-all duration-300 hover:shadow-md"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}