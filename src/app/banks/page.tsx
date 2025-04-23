import { FaStar, FaUniversity } from 'react-icons/fa'
import Link from 'next/link'

const banks = [
  {
    id: 1,
    name: 'State Bank of India',
    specialty: 'Personal Banking',
    rating: 4.7,
    reviews: 342,
    location: 'Main Branch, Camp, Pune',
    image: '/banks/bank1.jpg',
    availableSlots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM']
  },
  {
    id: 2,
    name: 'HDFC Bank',
    specialty: 'Business Banking',
    rating: 4.8,
    reviews: 289,
    location: 'Koregaon Park Branch, Pune',
    image: '/banks/bank2.jpg',
    availableSlots: ['10:00 AM', '11:30 AM', '1:00 PM', '4:00 PM']
  },
  {
    id: 3,
    name: 'ICICI Bank',
    specialty: 'Investment Services',
    rating: 4.6,
    reviews: 256,
    location: 'Aundh Branch, Pune',
    image: '/banks/bank3.jpg',
    availableSlots: ['9:30 AM', '11:00 AM', '2:30 PM', '4:30 PM']
  },
  {
    id: 4,
    name: 'Axis Bank',
    specialty: 'Wealth Management',
    rating: 4.7,
    reviews: 198,
    location: 'Baner Branch, Pune',
    image: '/banks/bank4.jpg',
    availableSlots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
  },
  {
    id: 5,
    name: 'Kotak Mahindra Bank',
    specialty: 'Digital Banking',
    rating: 4.8,
    reviews: 234,
    location: 'Viman Nagar Branch, Pune',
    image: '/banks/bank5.jpg',
    availableSlots: ['10:00 AM', '12:00 PM', '2:30 PM', '4:30 PM']
  },
  {
    id: 6,
    name: 'Punjab National Bank',
    specialty: 'Retail Banking',
    rating: 4.6,
    reviews: 187,
    location: 'Shivajinagar Branch, Pune',
    image: '/banks/bank6.jpg',
    availableSlots: ['9:30 AM', '11:30 AM', '2:00 PM', '4:00 PM']
  }
]

export default function BanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Bank Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banks.map((bank) => (
            <Link
              key={bank.id}
              href={`/banks/${bank.id}/book`}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaUniversity className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{bank.name}</h2>
                <p className="text-gray-600 mb-2">{bank.specialty}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700">{bank.rating} ({bank.reviews} reviews)</span>
                </div>
                <p className="text-gray-600">{bank.location}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Available Slots: {bank.availableSlots}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 