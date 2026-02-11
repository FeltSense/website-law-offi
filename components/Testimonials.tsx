'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Justice B Adjei provided exceptional representation during a challenging time. Their expertise and genuine care made all the difference in achieving a favorable outcome for my case.",
      name: "Michael Rodriguez",
      role: "Business Owner",
      image: "/images/testimonial-testimonials-0-1770826619947.jpg",
      rating: 5
    },
    {
      quote: "I was impressed by the personalized attention and clear communication throughout my legal matter. They explained everything in terms I could understand and fought tirelessly for my rights.",
      name: "Sarah Chen",
      role: "Healthcare Professional",
      image: "/images/testimonial-testimonials-0-1770826620507.jpg",
      rating: 5
    },
    {
      quote: "After consulting with several attorneys, I chose the Law Office of Justice B Adjei and couldn't be happier. Their dedication and professional approach gave me confidence during a difficult situation.",
      name: "David Thompson",
      role: "Small Business Consultant",
      image: "/images/testimonial-testimonials-0-1770826621050.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-secondary-500 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-500/70 font-light">
            Real experiences from clients we've had the privilege to serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:border-primary-500/20 transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>

              <blockquote className="text-secondary-500/80 leading-relaxed mb-8 flex-grow font-light">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-medium text-secondary-500">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-500/60 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-secondary-500/60 font-light">
            Ready to experience dedicated legal representation?{' '}
            <a
              href="#contact"
              className="text-primary-500 hover:text-primary-600 transition-colors font-normal"
            >
              Schedule a consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}