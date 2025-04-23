import { FaStar, FaBalanceScale } from 'react-icons/fa'
import Link from 'next/link'

const lawyers = [
  {
    id: 1,
    name: 'Adv. Rajesh Kumar',
    specialty: 'Corporate Law',
    rating: 4.9,
    reviews: 156,
    location: 'Legal Chambers, Camp, Pune',
    image: '/lawyers/lawyer1.jpg',
    availableSlots: ['9:00 AM', '11:30 AM', '2:00 PM', '4:00 PM']
  },
  {
    id: 2,
    name: 'Adv. Priya Sharma',
    specialty: 'Family Law',
    rating: 4.8,
    reviews: 132,
    location: 'Justice Complex, Shivajinagar, Pune',
    image: '/lawyers/lawyer2.jpg',
    availableSlots: ['10:00 AM', '12:30 PM', '3:00 PM', '5:00 PM']
  },
  {
    id: 3,
    name: 'Adv. Amit Patel',
    specialty: 'Criminal Law',
    rating: 4.7,
    reviews: 189,
    location: 'High Court Chambers, Pune',
    image: '/lawyers/lawyer3.jpg',
    availableSlots: ['9:30 AM', '11:00 AM', '2:30 PM', '4:30 PM']
  },
  {
    id: 4,
    name: 'Adv. Sneha Desai',
    specialty: 'Property Law',
    rating: 4.8,
    reviews: 145,
    location: 'Legal Associates, Kalyani Nagar, Pune',
    image: '/lawyers/lawyer4.jpg',
    availableSlots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
  },
  {
    id: 5,
    name: 'Adv. Vikram Joshi',
    specialty: 'Tax Law',
    rating: 4.9,
    reviews: 167,
    location: 'Tax Consultants, Baner, Pune',
    image: '/lawyers/lawyer5.jpg',
    availableSlots: ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM']
  },
  {
    id: 6,
    name: 'Adv. Meera Khanna',
    specialty: 'Intellectual Property',
    rating: 4.7,
    reviews: 123,
    location: 'IP Law Firm, Koregaon Park, Pune',
    image: '/lawyers/lawyer6.jpg',
    availableSlots: ['9:30 AM', '11:30 AM', '2:30 PM', '4:30 PM']
  }
]

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Legal Consultants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <Link
              key={lawyer.id}
              href={`/legal/${lawyer.id}/book`}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaBalanceScale className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{lawyer.name}</h2>
                <p className="text-gray-600 mb-2">{lawyer.specialty}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700">{lawyer.rating} ({lawyer.reviews} reviews)</span>
                </div>
                <p className="text-gray-600">{lawyer.location}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Available Slots: {lawyer.availableSlots.join(', ')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 