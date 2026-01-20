import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Clock, HeadphonesIcon, Shield, Smartphone, Zap } from 'lucide-react';
import React from 'react'

function WhyChoose() {
    const features = [
  {
    title: 'AI-Powered Analytics',
    description:
      'Get detailed performance insights with our advanced AI algorithms that analyze your strengths and weaknesses',
    icon: BarChart3,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30',
  },
  {
    title: 'Instant Results',
    description:
      'Get your test results immediately after submission with detailed explanations for every question',
    icon: Zap,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30',
  },
  {
    title: '24/7 Doubt Support',
    description:
      'Connect with expert faculty anytime for doubt resolution and personalized guidance',
    icon: HeadphonesIcon,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30',
  },
  {
    title: 'Secure & Reliable',
    description:
      'Bank-grade security ensures your data is safe and tests are conducted in a secure environment',
    icon: Shield,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30',
  },
  {
    title: 'Mobile Optimized',
    description:
      'Take tests seamlessly on any device - mobile, tablet, or desktop with our responsive design',
    icon: Smartphone,
    color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30',
  },
  {
    title: 'Time Management',
    description:
      'Master time management with our timer features and time-based analytics to improve speed',
    icon: Clock,
    color: 'bg-red-100 text-red-600 dark:bg-red-900/30',
  },
];
  

  return (
    <div className="w-full px-4 py-2 max-w-7xl mx-auto  text-color-primary">
         {/* Features Grid */}
        <div className='space-y-12'>
          <div className='text-start mb-12 space-y-2'>
            <h3 className='py-1 text-2xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Why Choose MockShala?</h3>
            <p className='text-gray-600 dark:text-gray-300 max-w-2xl'>
              Experience the most advanced and comprehensive test preparation
              platform designed for Indian competitive exams
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map(feature => (
              <Card
                key={feature.title}
                className='group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'
              >
                <CardContent className='p-6'>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className='h-6 w-6' />
                  </div>
                  <h4 className='text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors'>
                    {feature.title}
                  </h4>
                  <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </div>
  )
}

export default WhyChoose