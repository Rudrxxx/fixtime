'use client'

import Link from 'next/link'
import { FaStethoscope, FaCut, FaUniversity, FaBalanceScale, FaStar, FaQuoteLeft, FaClock, FaUserCheck, FaBell, FaGrinBeam, FaRocket, FaMagic } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode, useState, useEffect } from 'react'

const services = [
  {
    title: 'Doctors',
    icon: <FaStethoscope className="w-12 h-12" />,
    href: '/doctors',
    color: 'from-blue-500 to-blue-600',
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
    color: 'from-pink-500 to-pink-600',
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
    color: 'from-green-500 to-green-600',
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
    color: 'from-indigo-500 to-indigo-600',
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
    bgColor: 'bg-blue-500',
    text: 'FixTime has revolutionized how I manage my business appointments. The platform is intuitive and saves me hours every week.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Working Professional',
    initials: 'PP',
    bgColor: 'bg-pink-500',
    text: 'I love how easy it is to book appointments with my doctor. No more waiting in long queues!',
    rating: 5
  },
  {
    name: 'Amit Desai',
    role: 'Student',
    initials: 'AD',
    bgColor: 'bg-purple-500',
    text: 'The best part about FixTime is the variety of services available. From doctors to legal consultants, everything is just a click away.',
    rating: 4
  },
  {
    name: 'Neha Kapoor',
    role: 'Healthcare Professional',
    initials: 'NK',
    bgColor: 'bg-green-500',
    text: 'As a healthcare professional, I appreciate how FixTime helps organize my schedule. My patients love the easy booking system too!',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'Bank Manager',
    initials: 'VS',
    bgColor: 'bg-yellow-500',
    text: 'Our bank has seen 40% improvement in customer satisfaction since we started using FixTime for scheduling appointments.',
    rating: 5
  },
  {
    name: 'Meera Joshi',
    role: 'Lawyer',
    initials: 'MJ',
    bgColor: 'bg-indigo-500',
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // We now have 6 queue images

  // Slide facts to display in the slideshow
  const slideFacts = [
    "Did you know? About 99 million of our population daily stand in queue on an average of 3 hours a day, summing up to productivity loss of 297 lakhs hours a day.",
    "Queues are in the shops, in your car, on public transport, and even to get into restaurants. That is stressful. Sometimes chaotic",
    "An average person spends approximately 6 months of their life waiting in queues.",
    "In urban India, people spend an average of 10-12 hours per month standing in various queues.",
    "Bank queues can make customers wait for up to 45 minutes during peak hours.",
    "Hospital outpatient departments often have waiting times of 1-3 hours.",
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Array of image paths
  const slideImages = [
    '/queues/queue0.jpg',
    '/queues/queue1.jpg',
    '/queues/queue2.jpg',
    '/queues/queue3.jpg', 
    '/queues/queue4.jpg',
    '/queues/queue5.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(216,180,254,0.05),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.05),rgba(255,255,255,0))]"></div>
      </div>

      {/* Hero section in container */}
      <div className="relative container mx-auto px-4 py-8">
        {/* Hero Section */}
        <AnimatedSection>
          <header className="text-center mb-3">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4"
            >
              FixTime
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-semibold text-gray-600 mb-4"
            >
              SKIP THE QUEUE, BOOK WHAT&apos;S DUE
            </motion.p>
          </header>
        </AnimatedSection>
      </div>

      {/* Slideshow Section - Full Width */}
      <AnimatedSection delay={0.3}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">The Waiting Problem</h2>
          <div className="relative h-[650px] w-full overflow-hidden bg-black">
            {/* Slideshow Images */}
            <div className="relative h-full w-full">
              {slideImages.map((imgSrc, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  {/* Image wrapper with fill and fixed aspect ratio to prevent cutting */}
                  <div className="relative w-full h-full">
                    <img
                      src={imgSrc}
                      alt={`Queue image ${index}`}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Darker overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/50"></div>
                  
                  {/* Fact text - without box for all slides */}
                  <div className="absolute bottom-20 left-0 right-0 text-center px-8">
                    <p className="text-white text-2xl font-semibold max-w-4xl mx-auto leading-relaxed shadow-text">
                      {slideFacts[index]}
                    </p>
                  </div>
                </div>
              ))}

              {/* Indicators - Centered at bottom */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/30'}`}
                    aria-label={`Go to slide ${i + 1}`}
                    title={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Rest of content in container */}
      <div className="relative container mx-auto px-4">
        {/* Services Grid */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-md bg-white border border-gray-100"
              >
                <div className="relative h-48">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{service.stats.providers} Providers</span>
                    <span className="flex items-center">
                      <FaStar className="text-yellow-500 mr-1" />
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
        <AnimatedSection delay={0.6}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Why Choose FixTime?</h2>
            <p className="text-xl text-center text-blue-600 italic mb-10">&quot;Why stand in line when you can FixTime?&quot;</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Your Personal Assistant',
                  icon: <FaMagic className="w-8 h-8 text-purple-600 mb-3" />,
                  description: 'FixTime is like having a PA in your pocket. Book appointments anytime, anywhere without a single phone call.',
                  quote: 'Time saved is time earned!'
                },
                {
                  title: 'Skip The Queue',
                  icon: <FaRocket className="w-8 h-8 text-blue-600 mb-3" />,
                  description: 'No more standing in lines or waiting on hold. Join the digital revolution and reclaim your precious time.',
                  quote: 'Life is too short to wait in queues!'
                },
                {
                  title: 'Smart Reminders',
                  icon: <FaBell className="w-8 h-8 text-pink-600 mb-3" />,
                  description: 'Never miss an appointment with our smart notification system that keeps you on track.',
                  quote: 'Stay organized, stay ahead!'
                },
                {
                  title: 'Verified Providers',
                  icon: <FaUserCheck className="w-8 h-8 text-green-600 mb-3" />,
                  description: 'All service providers are verified and rated by real users for your peace of mind.',
                  quote: 'Quality service, guaranteed!'
                },
                {
                  title: 'Real-Time Availability',
                  icon: <FaClock className="w-8 h-8 text-yellow-600 mb-3" />,
                  description: 'See real-time availability and book slots that work perfectly with your schedule.',
                  quote: 'The right time is your time!'
                },
                {
                  title: 'Happiness Guarantee',
                  icon: <FaGrinBeam className="w-8 h-8 text-orange-600 mb-3" />,
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
                  className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <p className="text-sm italic text-blue-600 mt-2">&quot;{feature.quote}&quot;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection delay={0.8}>
          <div className="mb-16 bg-gray-50 py-12 px-4 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full mr-4 flex items-center justify-center text-white font-bold`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="flex text-yellow-500">
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
        <AnimatedSection delay={1.0}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Join thousands of users who are saving time with FixTime</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/doctors"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
