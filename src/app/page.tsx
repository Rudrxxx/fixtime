'use client'

import Link from 'next/link'
import { FaStethoscope, FaCut, FaUniversity, FaBalanceScale, FaStar, FaQuoteLeft, FaClock, FaUserCheck, FaBell, FaGrinBeam, FaRocket, FaMagic } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

const services = [
  {
    title: 'Doctors',
    icon: <FaStethoscope className="w-12 h-12" />,
    href: '/doctors',
    color: 'from-blue-500 to-cyan-500',
    description: 'Book appointments with top doctors in your area',
    image: '/services/doctors.jpg',
    stats: {
      providers: '100+',
      rating: '4.8',
      reviews: '5000+'
    }
  },
  {
    title: 'Personal Care',
    icon: <FaCut className="w-12 h-12" />,
    href: '/personal-care',
    color: 'from-pink-500 to-purple-500',
    description: 'Salon, spa, and beauty services at your convenience',
    image: '/services/personal-care.jpg',
    stats: {
      providers: '80+',
      rating: '4.7',
      reviews: '4000+'
    }
  },
  {
    title: 'Banks',
    icon: <FaUniversity className="w-12 h-12" />,
    href: '/banks',
    color: 'from-green-500 to-emerald-500',
    description: 'Schedule meetings with bank representatives',
    image: '/services/banks.jpg',
    stats: {
      providers: '50+',
      rating: '4.6',
      reviews: '3000+'
    }
  },
  {
    title: 'Legal Consultants',
    icon: <FaBalanceScale className="w-12 h-12" />,
    href: '/legal',
    color: 'from-indigo-500 to-violet-500',
    description: 'Book consultations with legal experts',
    image: '/services/legal.jpg',
    stats: {
      providers: '40+',
      rating: '4.8',
      reviews: '2500+'
    }
  }
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Business Owner',
    initials: 'RS',
    bgColor: 'bg-blue-600',
    text: 'FixTime has revolutionized how I manage my business appointments. The platform is intuitive and saves me hours every week.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Working Professional',
    initials: 'PP',
    bgColor: 'bg-pink-600',
    text: 'I love how easy it is to book appointments with my doctor. No more waiting in long queues!',
    rating: 5
  },
  {
    name: 'Amit Desai',
    role: 'Student',
    initials: 'AD',
    bgColor: 'bg-purple-600',
    text: 'The best part about FixTime is the variety of services available. From doctors to legal consultants, everything is just a click away.',
    rating: 4
  },
  {
    name: 'Neha Kapoor',
    role: 'Healthcare Professional',
    initials: 'NK',
    bgColor: 'bg-green-600',
    text: 'As a healthcare professional, I appreciate how FixTime helps organize my schedule. My patients love the easy booking system too!',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'Bank Manager',
    initials: 'VS',
    bgColor: 'bg-yellow-600',
    text: 'Our bank has seen 40% improvement in customer satisfaction since we started using FixTime for scheduling appointments.',
    rating: 5
  },
  {
    name: 'Meera Joshi',
    role: 'Lawyer',
    initials: 'MJ',
    bgColor: 'bg-indigo-600',
    text: 'Managing client consultations used to be a nightmare. FixTime has streamlined my practice and helped me focus on what matters - my clients.',
    rating: 4
  }
]

const AnimatedSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Hero Section */}
        <AnimatedSection>
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4"
            >
              FixTime
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4"
            >
              SKIP THE QUEUE, BOOK WHAT&apos;S DUE
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                transition: { duration: 0.3 }
              }}
              className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 cursor-pointer"
            >
              <p className="text-white text-lg">
                Did you know? About 99 million of our population daily stand in queue on an average of 3 hours a day, 
                summing up to productivity loss of 297 lakhs hours a day.
              </p>
            </motion.div>
          </header>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg backdrop-blur-sm bg-white/10"
              >
                <div className="relative h-48">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">{service.title}</h2>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{service.stats.providers} Providers</span>
                    <span className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      {service.stats.rating} ({service.stats.reviews} reviews)
                    </span>
                  </div>
                </div>
                <Link href={service.href} className="absolute inset-0" />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Why Choose FixTime?</h2>
            <p className="text-xl text-center text-purple-300 italic mb-10">&quot;Why stand in line when you can FixTime?&quot;</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Your Personal Assistant',
                  icon: <FaMagic className="w-8 h-8 text-purple-400 mb-3" />,
                  description: 'FixTime is like having a PA in your pocket. Book appointments anytime, anywhere without a single phone call.',
                  quote: 'Time saved is time earned!'
                },
                {
                  title: 'Skip The Queue',
                  icon: <FaRocket className="w-8 h-8 text-blue-400 mb-3" />,
                  description: 'No more standing in lines or waiting on hold. Join the digital revolution and reclaim your precious time.',
                  quote: 'Life is too short to wait in queues!'
                },
                {
                  title: 'Smart Reminders',
                  icon: <FaBell className="w-8 h-8 text-pink-400 mb-3" />,
                  description: 'Never miss an appointment with our smart notification system that keeps you on track.',
                  quote: 'Stay organized, stay ahead!'
                },
                {
                  title: 'Verified Providers',
                  icon: <FaUserCheck className="w-8 h-8 text-green-400 mb-3" />,
                  description: 'All service providers are verified and rated by real users for your peace of mind.',
                  quote: 'Quality service, guaranteed!'
                },
                {
                  title: 'Real-Time Availability',
                  icon: <FaClock className="w-8 h-8 text-yellow-400 mb-3" />,
                  description: 'See real-time availability and book slots that work perfectly with your schedule.',
                  quote: 'The right time is your time!'
                },
                {
                  title: 'Happiness Guarantee',
                  icon: <FaGrinBeam className="w-8 h-8 text-orange-400 mb-3" />,
                  description: 'We&apos;re committed to your satisfaction with every booking you make through our platform.',
                  quote: 'Happiness is just a booking away!'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300 mb-3">{feature.description}</p>
                    <p className="text-sm italic text-cyan-300 mt-2">&quot;{feature.quote}&quot;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection delay={0.6}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full mr-4 flex items-center justify-center text-white font-bold`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-gray-400 mb-4" />
                  <p className="text-gray-300 mb-4">{testimonial.text}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.8}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Join thousands of users who are saving time with FixTime</p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/doctors"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book an Appointment
              </Link>
              <Link
                href="/appointments"
                className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                View My Appointments
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  )
}
