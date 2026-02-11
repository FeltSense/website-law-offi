'use client'

import { useState } from 'react'
import { Phone, MapPin, Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Thank you for reaching out. We will contact you shortly.')
    setFormData({ name: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-secondary-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-secondary-500/70">
            Have a legal question or need representation? Reach out today for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-secondary-500 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your legal matter..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 text-white py-4 rounded-lg font-medium hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-500 mb-6">
                Contact Information
              </h3>
              <p className="text-secondary-500/70 mb-8">
                Reach out directly and we'll get back to you as soon as possible. We're here to help with your legal needs.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+14099631955"
                className="flex items-start gap-4 p-6 bg-primary-500/5 rounded-xl hover:bg-primary-500/10 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary-500 mb-1">Phone</h4>
                  <p className="text-primary-500 font-medium">+1 409-963-1955</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-primary-500/5 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary-500 mb-1">Office Location</h4>
                  <p className="text-secondary-500/70">
                    Medical Triangle Dr, Port Arthur, TX 77642, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-secondary-500/60">
                Available for consultations Monday through Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}