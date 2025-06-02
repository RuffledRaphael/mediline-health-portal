
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAppointments, mockPatients } from '@/data/mockData';
import { Calendar, Clock, User, Phone, FileText, Pill, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const { toast } = useToast();

  const today = new Date().toISOString().split('T')[0];
  const todaysAppointments = appointments.filter(apt => apt.date === today);
  const upcomingAppointments = appointments.filter(apt => apt.date > today);
  const pastAppointments = appointments.filter(apt => apt.date < today);

  const handleStartConsultation = (appointmentId: string) => {
    console.log('Starting consultation for appointment:', appointmentId);
  };

  const handleCancelAppointment = (appointmentId: string) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === appointmentId 
          ? { ...apt, status: 'cancelled' }
          : apt
      )
    );

    const appointment = appointments.find(apt => apt.id === appointmentId);
    const patient = mockPatients.find(p => p.id === appointment?.patientId);
    
    toast({
      title: "Appointment Cancelled",
      description: `Appointment with ${patient?.name} has been cancelled. The patient will be notified.`,
    });
  };

  const AppointmentCard = ({ appointment, showActions = true }: { appointment: any, showActions?: boolean }) => {
    const patient = mockPatients.find(p => p.id === appointment.patientId);
    
    return (
      <Card className="mb-4">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {patient?.avatar ? (
                  <img 
                    src={patient.avatar} 
                    alt={patient.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-medical-600" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{patient?.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span>Age: {patient ? new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear() : 'N/A'}</span>
                  <span>Blood Group: {patient?.bloodGroup}</span>
                  <span className="flex items-center">
                    <Phone className="w-3 h-3 mr-1" />
                    {patient?.phone}
                  </span>
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
                    <strong>Chief Complaint:</strong> {appointment.reason}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              <Badge 
                variant={appointment.status === 'scheduled' ? 'default' : 'secondary'}
                className={
                  appointment.status === 'scheduled' ? 'bg-green-100 text-green-800' : 
                  appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''
                }
              >
                {appointment.status === 'cancelled' ? 'Cancelled' : appointment.status}
              </Badge>
              
              {showActions && appointment.status === 'scheduled' && (
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <Link to={`/doctor/patient/${appointment.patientId}/history`}>
                      <Button size="sm" variant="outline" className="text-xs">
                        <FileText className="w-3 h-3 mr-1" />
                        Medical History
                      </Button>
                    </Link>
                    <Link to={`/doctor/patient/${appointment.patientId}/prescribe`}>
                      <Button size="sm" className="bg-medical-600 hover:bg-medical-700 text-xs">
                        <Pill className="w-3 h-3 mr-1" />
                        Write Prescription
                      </Button>
                    </Link>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleStartConsultation(appointment.id)}
                      className="flex-1"
                    >
                      Start Visit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => handleCancelAppointment(appointment.id)}
                    >
                      <XCircle className="w-3 h-3" />
                    </Button>
                  </div>
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Appointments</h1>
        <p className="text-gray-600">Manage your patient appointments and consultations</p>
      </div>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today ({todaysAppointments.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming ({upcomingAppointments.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastAppointments.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-4">
          {todaysAppointments.length > 0 ? (
            todaysAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments today</h3>
                <p className="text-gray-600">Enjoy your free day!</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
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
                <p className="text-gray-600">Your schedule is clear for the coming days</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} showActions={false} />
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

export default DoctorAppointments;
