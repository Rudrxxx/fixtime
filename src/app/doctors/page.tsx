import { FaStar, FaStethoscope } from 'react-icons/fa'
import Link from 'next/link'

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.8,
    reviews: 124,
    location: 'Ruby Hall Clinic, Pune',
    image: '/doctors/doctor1.jpg',
    availableSlots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    rating: 4.9,
    reviews: 98,
    location: 'Jehangir Hospital, Pune',
    image: '/doctors/doctor2.jpg',
    availableSlots: ['10:00 AM', '11:30 AM', '1:00 PM', '4:00 PM']
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    rating: 4.7,
    reviews: 156,
    location: 'Sahyadri Hospital, Pune',
    image: '/doctors/doctor3.jpg',
    availableSlots: ['8:30 AM', '11:00 AM', '2:30 PM', '4:30 PM']
  },
  {
    id: 4,
    name: 'Dr. Rajesh Patil',
    specialty: 'Orthopedic Surgeon',
    rating: 4.9,
    reviews: 187,
    location: 'Deenanath Mangeshkar Hospital, Pune',
    image: '/doctors/doctor4.jpg',
    availableSlots: ['9:30 AM', '11:00 AM', '2:00 PM', '4:00 PM']
  },
  {
    id: 5,
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist',
    rating: 4.8,
    reviews: 142,
    location: 'Aditya Birla Hospital, Pune',
    image: '/doctors/doctor5.jpg',
    availableSlots: ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM']
  },
  {
    id: 6,
    name: 'Dr. Amit Deshmukh',
    specialty: 'Neurologist',
    rating: 4.7,
    reviews: 165,
    location: 'Noble Hospital, Pune',
    image: '/doctors/doctor6.jpg',
    availableSlots: ['9:00 AM', '11:30 AM', '2:30 PM', '4:30 PM']
  }
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(216,180,254,0.05),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Find a Doctor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              href={`/doctors/${doctor.id}/book`}
              className="group relative overflow-hidden rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaStethoscope className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{doctor.name}</h2>
                <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-gray-700">{doctor.rating} ({doctor.reviews} reviews)</span>
                </div>
                <p className="text-gray-600">{doctor.location}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Available Slots: {doctor.availableSlots}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 