'use client'

import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaUserMd, FaCut, FaUniversity, FaBalanceScale, FaTrash } from 'react-icons/fa'

const serviceIcons = {
  doctors: <FaUserMd className="w-6 h-6" />,
  'personal-care': <FaCut className="w-6 h-6" />,
  banks: <FaUniversity className="w-6 h-6" />,
  legal: <FaBalanceScale className="w-6 h-6" />
}

const serviceColors = {
  doctors: 'bg-blue-500',
  'personal-care': 'bg-pink-500',
  banks: 'bg-green-500',
  legal: 'bg-indigo-500'
}

interface AppointmentType {
  id: number;
  service: string;
  serviceId: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  selectedSlot: string;
  appointmentDate?: string; // For backward compatibility
  date: string;
  status: string;
  providerInfo: {
    name: string;
    type: string;
    location: string;
  };
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<AppointmentType[]>([])

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    setAppointments(storedAppointments)
  }, [])

  const handleCancel = (appointmentId: number) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      const updatedAppointments = appointments.filter(apt => apt.id !== appointmentId)
      setAppointments(updatedAppointments)
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
      alert('Appointment cancelled successfully!')
    }
  }

  // Format date for display
  const formatAppointmentDate = (appointment: AppointmentType) => {
    // For backward compatibility
    if (!appointment.appointmentDate) {
      return 'Today';
    }

    const date = new Date(appointment.appointmentDate);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          My Appointments
        </h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <FaCalendarAlt className="w-6 h-6" />
          <span className="text-lg font-semibold">{appointments.length} Appointments</span>
        </div>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center py-12">
          <FaCalendarAlt className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Appointments Yet</h2>
          <p className="text-gray-500">Book your first appointment to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className={`p-4 ${serviceColors[appointment.service as keyof typeof serviceColors]} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {serviceIcons[appointment.service as keyof typeof serviceIcons]}
                    <span className="text-lg font-semibold capitalize">
                      {appointment.service.replace('-', ' ')}
                    </span>
                  </div>
                  <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {appointment.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{appointment.selectedSlot}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{formatAppointmentDate(appointment)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Provider:</span> {appointment.providerInfo.name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Type:</span> {appointment.providerInfo.type}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Location:</span> {appointment.providerInfo.location}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Your Name:</span> {appointment.name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span> {appointment.phone}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Reason:</span> {appointment.reason}
                  </p>
                </div>
                <button
                  onClick={() => handleCancel(appointment.id)}
                  className="mt-4 w-full flex items-center justify-center space-x-2 bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <FaTrash className="w-4 h-4" />
                  <span>Cancel Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 