'use client';

import { Scale, Users, Star, Building2, MessageCircle, Award } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
}

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: Building2,
      title: 'Local Port Arthur Expertise',
      description: 'A dedicated attorney who understands Texas law and your community, bringing local insight to every case.',
      image: '/images/services-feature-1770826628313.png'
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description: 'Direct communication throughout your case with a lawyer who takes time to understand your unique situation.',
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description: 'Trusted by clients with a 4.5-star satisfaction rating, delivering results through dedicated advocacy.',
    },
    {
      icon: Scale,
      title: 'Comprehensive Legal Services',
      description: 'From family law to criminal defense, receive expert representation across a wide range of practice areas.',
      image: '/images/services-feature-1770826628678.png'
    },
    {
      icon: MessageCircle,
      title: 'Accessible Representation',
      description: 'Prompt responses to your concerns and questions, ensuring you stay informed every step of the way.',
    },
    {
      icon: Award,
      title: 'Committed Advocacy',
      description: 'Unwavering dedication to protecting your rights and achieving the best possible outcome for your case.',
    },
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-secondary-500 mb-6">
            Why Choose Law Office Of Justice B Adjei
          </h2>
          <p className="text-lg text-secondary-400 font-light">
            Experience the difference of working with a lawyer who combines legal excellence with genuine care for your well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white border border-secondary-100 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary-300"
              >
                {feature.image && (
                  <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-primary-500 text-white'
                      : 'bg-primary-50 text-primary-500'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  {feature.title}
                </h3>

                <p className="text-secondary-400 font-light leading-relaxed">
                  {feature.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-primary-500 transition-all duration-300 ${
                    hoveredIndex === index ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}