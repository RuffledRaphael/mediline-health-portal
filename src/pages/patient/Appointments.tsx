
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAppointments, mockDoctors } from '@/data/mockData';
import { Calendar, Clock, User, MapPin, Phone } from 'lucide-react';

const PatientAppointments = () => {
  const [appointments] = useState(mockAppointments);

  const upcomingAppointments = appointments.filter(apt => apt.status === 'scheduled');
  const pastAppointments = appointments.filter(apt => apt.status === 'completed');

  const handleCancelAppointment = (appointmentId: string) => {
    console.log('Cancelling appointment:', appointmentId);
  };

  const handleRescheduleAppointment = (appointmentId: string) => {
    console.log('Rescheduling appointment:', appointmentId);
  };

  const AppointmentCard = ({ appointment, isPast = false }: { appointment: any, isPast?: boolean }) => {
    const doctor = mockDoctors.find(d => d.id === appointment.doctorId);
    
    return (
      <Card className="mb-4">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {doctor?.avatar ? (
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
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{doctor?.name}</h3>
                <p className="text-sm text-gray-600">{doctor?.specialization}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {doctor?.hospital}
                </div>
                
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-1 text-medical-600" />
                    <span className="font-medium">{appointment.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1 text-medical-600" />
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                </div>
                
                {appointment.reason && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Reason:</strong> {appointment.reason}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              <Badge 
                variant={appointment.status === 'scheduled' ? 'default' : 'secondary'}
                className={appointment.status === 'scheduled' ? 'bg-green-100 text-green-800' : ''}
              >
                {appointment.status}
              </Badge>
              
              {!isPast && (
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleRescheduleAppointment(appointment.id)}
                  >
                    Reschedule
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={() => handleCancelAppointment(appointment.id)}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-600">Manage your upcoming and past appointments</p>
        </div>
        <Button className="bg-medical-600 hover:bg-medical-700">
          Book New Appointment
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming ({upcomingAppointments.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastAppointments.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming appointments</h3>
                <p className="text-gray-600 mb-4">Book your next appointment to get started</p>
                <Button className="bg-medical-600 hover:bg-medical-700">
                  Find a Doctor
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} isPast />
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No past appointments</h3>
                <p className="text-gray-600">Your appointment history will appear here</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientAppointments;
