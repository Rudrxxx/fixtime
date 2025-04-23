'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { FaCalendarAlt } from 'react-icons/fa'

const serviceData = {
  doctors: {
    title: 'Doctor',
    color: 'from-blue-600 to-purple-600',
    buttonColor: 'from-blue-600 to-purple-600',
    providers: [
      { id: '1', name: 'Dr. Sarah Johnson', location: 'Ruby Hall Clinic, Pune' },
      { id: '2', name: 'Dr. Michael Chen', location: 'Jehangir Hospital, Pune' },
      { id: '3', name: 'Dr. Emily Rodriguez', location: 'Sahyadri Hospital, Pune' },
      { id: '4', name: 'Dr. Rajesh Patil', location: 'Deenanath Mangeshkar Hospital, Pune' },
      { id: '5', name: 'Dr. Priya Sharma', location: 'Aditya Birla Hospital, Pune' },
      { id: '6', name: 'Dr. Amit Deshmukh', location: 'Noble Hospital, Pune' }
    ]
  },
  'personal-care': {
    title: 'Service',
    color: 'from-pink-600 to-purple-600',
    buttonColor: 'from-pink-600 to-purple-600',
    providers: [
      { id: '1', name: 'Glamour Salon', location: 'Koregaon Park, Pune' },
      { id: '2', name: 'Serenity Spa', location: 'Baner, Pune' },
      { id: '3', name: 'Elite Barbershop', location: 'Viman Nagar, Pune' },
      { id: '4', name: 'Urban Nails & Spa', location: 'Aundh, Pune' },
      { id: '5', name: 'The Beauty Lounge', location: 'Kalyani Nagar, Pune' },
      { id: '6', name: 'Zen Massage Center', location: 'Wakad, Pune' }
    ]
  },
  banks: {
    title: 'Bank',
    color: 'from-green-600 to-blue-600',
    buttonColor: 'from-green-600 to-blue-600',
    providers: [
      { id: '1', name: 'State Bank of India', location: 'Main Branch, Camp, Pune' },
      { id: '2', name: 'HDFC Bank', location: 'Koregaon Park Branch, Pune' },
      { id: '3', name: 'ICICI Bank', location: 'Aundh Branch, Pune' },
      { id: '4', name: 'Axis Bank', location: 'Baner Branch, Pune' },
      { id: '5', name: 'Kotak Mahindra Bank', location: 'Viman Nagar Branch, Pune' },
      { id: '6', name: 'Punjab National Bank', location: 'Shivajinagar Branch, Pune' }
    ]
  },
  legal: {
    title: 'Legal Consultant',
    color: 'from-indigo-600 to-purple-600',
    buttonColor: 'from-indigo-600 to-purple-600',
    providers: [
      { id: '1', name: 'Adv. Rajesh Kumar', location: 'Legal Chambers, Camp, Pune' },
      { id: '2', name: 'Adv. Priya Sharma', location: 'Justice Complex, Shivajinagar, Pune' },
      { id: '3', name: 'Adv. Amit Patel', location: 'High Court Chambers, Pune' },
      { id: '4', name: 'Adv. Sneha Desai', location: 'Legal Associates, Kalyani Nagar, Pune' },
      { id: '5', name: 'Adv. Vikram Joshi', location: 'Tax Consultants, Baner, Pune' },
      { id: '6', name: 'Adv. Meera Khanna', location: 'IP Law Firm, Koregaon Park, Pune' }
    ]
  }
}

export default function BookAppointment() {
  const router = useRouter()
  const params = useParams()
  const service = params.service as string
  const id = params.id as string

  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  })
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date())

  // List of available time slots
  const allTimeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '10:30 AM', '11:30 AM',
    '1:00 PM', '2:00 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'
  ]

  // Update current time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Generate the next 7 days for date selection
  const getNextSevenDays = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    
    return dates;
  };

  // Check if a time slot is in the past
  const isTimeSlotPast = (timeSlot: string) => {
    if (!selectedDate) return true;
    
    const today = new Date().toISOString().split('T')[0];
    if (selectedDate > today) return false;
    if (selectedDate < today) return true;
    
    // If selected date is today, check the time
    const [time, period] = timeSlot.split(' ');
    const [hour, minute] = time.split(':').map(Number);
    
    let timeSlotHour = hour;
    if (period === 'PM' && hour !== 12) timeSlotHour += 12;
    if (period === 'AM' && hour === 12) timeSlotHour = 0;
    
    if (timeSlotHour < currentDateTime.getHours()) return true;
    if (timeSlotHour === currentDateTime.getHours() && minute <= currentDateTime.getMinutes()) return true;
    
    return false;
  };

  // Initialize with today's date when component mounts
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedSlot) {
      alert('Please select a date and time slot');
      return;
    }
    
    // Get existing appointments from localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    
    // Find the provider information
    const provider = serviceData[service as keyof typeof serviceData].providers.find(p => p.id === id)
    
    if (!provider) {
      alert('Provider not found')
      return
    }
    
    // Create new appointment with all necessary information
    const newAppointment = {
      id: Date.now(),
      service,
      serviceId: id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
      selectedSlot,
      appointmentDate: selectedDate,
      date: new Date().toISOString(),
      status: 'upcoming',
      providerInfo: {
        name: provider.name,
        type: service,
        location: provider.location
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
        <h1 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${serviceData[service as keyof typeof serviceData].color}`}>
          Book Your {serviceData[service as keyof typeof serviceData].title} Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <FaCalendarAlt className="mr-2" /> 
              Select Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
              {getNextSevenDays().map(date => (
                <button
                  key={date.value}
                  type="button"
                  onClick={() => setSelectedDate(date.value)}
                  className={`p-2 rounded-lg border-2 transition-colors font-medium ${
                    selectedDate === date.value
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-200 text-gray-900 hover:border-blue-300'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {allTimeSlots.map((slot) => {
                const isPast = isTimeSlotPast(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isPast}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 rounded-lg border-2 transition-colors font-medium ${
                      selectedSlot === slot
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : isPast
                          ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'border-gray-200 text-gray-900 hover:border-blue-300'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-gradient-to-r ${serviceData[service as keyof typeof serviceData].buttonColor} text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors`}
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  )
} 