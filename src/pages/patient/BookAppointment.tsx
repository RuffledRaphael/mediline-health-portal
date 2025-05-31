
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { mockDoctors, mockTimeSlots } from '@/data/mockData';
import { ArrowLeft, User, MapPin, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [reason, setReason] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  const doctor = mockDoctors.find(d => d.id === doctorId);

  if (!doctor) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Doctor not found</h2>
        <Button onClick={() => navigate('/patient/doctors')}>
          Back to Doctor Search
        </Button>
      </div>
    );
  }

  const today = new Date();
  const maxDate = addDays(today, 30); // Allow booking up to 30 days in advance

  const isDateDisabled = (date: Date) => {
    const dayName = format(date, 'EEEE');
    return !doctor.availability.includes(dayName) || date < today;
  };

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time for your appointment.",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${doctor.name} is confirmed for ${format(selectedDate, 'PPP')} at ${selectedTime}.`,
    });
    
    setIsBooking(false);
    navigate('/patient/appointments');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate(`/patient/doctors/${doctor.id}`)}
          className="flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Doctor Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Booking Appointment With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3 mb-4">
              {doctor.avatar ? (
                <img 
                  src={doctor.avatar} 
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-medical-600" />
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                <Badge variant="secondary" className="bg-medical-100 text-medical-700">
                  {doctor.specialization}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {doctor.hospital}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {doctor.experience} years experience
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-medical-50 rounded-lg">
              <p className="text-sm text-medical-700 font-medium">
                Consultation Fee: ${doctor.consultationFee}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Booking Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Date Selection */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Choose Date</h4>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={isDateDisabled}
                  fromDate={today}
                  toDate={maxDate}
                  className="rounded-md border"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Available on: {doctor.availability.join(', ')}
              </p>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Choose Time</h4>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {mockTimeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={selectedTime === time ? "bg-medical-600 hover:bg-medical-700" : ""}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Reason for Visit */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Reason for Visit (Optional)</h4>
              <Textarea
                placeholder="Briefly describe your symptoms or reason for consultation..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
            </div>

            {/* Summary */}
            {selectedDate && selectedTime && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Appointment Summary</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {format(selectedDate, 'PPPP')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedTime}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {doctor.name} - {doctor.specialization}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {doctor.hospital}
                  </div>
                </div>
              </div>
            )}

            {/* Book Button */}
            <Button 
              size="lg"
              className="w-full bg-medical-600 hover:bg-medical-700"
              onClick={handleBookAppointment}
              disabled={!selectedDate || !selectedTime || isBooking}
            >
              {isBooking ? 'Booking...' : 'Confirm Appointment'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookAppointment;
