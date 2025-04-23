import { FaStar, FaCut } from 'react-icons/fa'
import Link from 'next/link'

const services = [
  {
    id: 1,
    name: 'Glamour Salon',
    specialty: 'Hair & Beauty',
    rating: 4.9,
    reviews: 215,
    location: 'Koregaon Park, Pune',
    image: '/salon/salon1.jpg',
    availableSlots: ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM']
  },
  {
    id: 2,
    name: 'Serenity Spa',
    specialty: 'Massage & Wellness',
    rating: 4.8,
    reviews: 178,
    location: 'Baner, Pune',
    image: '/salon/salon2.jpg',
    availableSlots: ['9:30 AM', '11:00 AM', '1:30 PM', '3:30 PM']
  },
  {
    id: 3,
    name: 'Elite Barbershop',
    specialty: 'Men\'s Grooming',
    rating: 4.7,
    reviews: 142,
    location: 'Viman Nagar, Pune',
    image: '/salon/salon3.jpg',
    availableSlots: ['9:00 AM', '10:30 AM', '2:30 PM', '4:30 PM']
  },
  {
    id: 4,
    name: 'Urban Nails & Spa',
    specialty: 'Nail Care & Spa',
    rating: 4.8,
    reviews: 156,
    location: 'Aundh, Pune',
    image: '/salon/salon4.jpg',
    availableSlots: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM']
  },
  {
    id: 5,
    name: 'The Beauty Lounge',
    specialty: 'Bridal & Makeup',
    rating: 4.9,
    reviews: 198,
    location: 'Kalyani Nagar, Pune',
    image: '/salon/salon5.jpg',
    availableSlots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
  },
  {
    id: 6,
    name: 'Zen Massage Center',
    specialty: 'Ayurvedic Massage',
    rating: 4.7,
    reviews: 167,
    location: 'Wakad, Pune',
    image: '/salon/salon6.jpg',
    availableSlots: ['10:30 AM', '12:00 PM', '2:30 PM', '4:30 PM']
  }
]

export default function PersonalCarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Personal Care Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/personal-care/${service.id}/book`}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCut className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.name}</h2>
                <p className="text-gray-600 mb-2">{service.specialty}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700">{service.rating} ({service.reviews} reviews)</span>
                </div>
                <p className="text-gray-600">{service.location}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Available Slots: {service.availableSlots.join(', ')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 