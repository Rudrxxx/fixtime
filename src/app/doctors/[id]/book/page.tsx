'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const doctorData = {
  '1': { name: 'Dr. Sarah Johnson', location: 'Ruby Hall Clinic, Pune' },
  '2': { name: 'Dr. Michael Chen', location: 'Jehangir Hospital, Pune' },
  '3': { name: 'Dr. Emily Rodriguez', location: 'Sahyadri Hospital, Pune' },
  '4': { name: 'Dr. Rajesh Patil', location: 'Deenanath Mangeshkar Hospital, Pune' },
  '5': { name: 'Dr. Priya Sharma', location: 'Aditya Birla Hospital, Pune' },
  '6': { name: 'Dr. Amit Deshmukh', location: 'Noble Hospital, Pune' }
}

export default function BookAppointment() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [selectedSlot, setSelectedSlot] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  })

  const timeSlots = [
    '9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get existing appointments from localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    
    // Get doctor information
    const doctor = doctorData[id as keyof typeof doctorData]
    
    if (!doctor) {
      alert('Doctor not found')
      return
    }
    
    // Create new appointment with all necessary information
    const newAppointment = {
      id: Date.now(),
      service: 'doctors',
      serviceId: id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
      selectedSlot,
      date: new Date().toISOString(),
      status: 'upcoming',
      providerInfo: {
        name: doctor.name,
        type: 'doctors',
        location: doctor.location
      }
    }
    
    // Add new appointment to list
    const updatedAppointments = [...existingAppointments, newAppointment]
    
    // Save to localStorage
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    
    // Show success message
    alert('Appointment booked successfully!')
    
    // Redirect to appointments page
    router.push('/appointments')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Book Your Doctor Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Time Slot
            </label>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    selectedSlot === slot
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-gray-700 font-medium mb-2">
              Reason for Visit
            </label>
            <textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  )
} 