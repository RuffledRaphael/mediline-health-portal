
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { mockAppointments, mockPrescriptions, mockTestResults, mockDoctors } from '@/data/mockData';
import { Calendar, Clock, User, FileText, TestTube, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import HealthMetricsCarousel from '@/components/patient/HealthMetricsCarousel';

const PatientOverview = () => {
  const { user } = useAuth();

  // Get upcoming appointments
  const upcomingAppointments = mockAppointments
    .filter(apt => apt.patientId === user?.id && apt.status === 'scheduled')
    .slice(0, 2);

  // Get recent prescriptions
  const recentPrescriptions = mockPrescriptions
    .filter(presc => presc.patientId === user?.id)
    .slice(0, 2);

  // Get recent test results
  const recentTests = mockTestResults
    .filter(test => test.patientId === user?.id)
    .slice(0, 2);

  const healthStats = {
    nextAppointment: upcomingAppointments[0],
    activeMedications: recentPrescriptions.reduce((acc, presc) => acc + presc.medications.length, 0),
    pendingTests: mockTestResults.filter(test => test.status === 'pending').length,
    lastVisit: '2024-05-28'
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-medical-600 to-medical-700 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-medical-100">Here's your health overview for today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Next Appointment</p>
                <p className="text-2xl font-bold text-gray-900">
                  {healthStats.nextAppointment ? 'Jun 5' : 'None'}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-medical-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Medications</p>
                <p className="text-2xl font-bold text-gray-900">{healthStats.activeMedications}</p>
              </div>
              <TestTube className="h-8 w-8 text-medical-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Tests</p>
                <p className="text-2xl font-bold text-gray-900">{healthStats.pendingTests}</p>
              </div>
              <FileText className="h-8 w-8 text-medical-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Health Score</p>
                <p className="text-2xl font-bold text-green-600">Good</p>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Metrics Carousel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2 text-medical-600" />
            Health Progress Tracker
          </CardTitle>
          <CardDescription>Monitor your health trends and vital signs</CardDescription>
        </CardHeader>
        <CardContent>
          <HealthMetricsCarousel />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Upcoming Appointments</CardTitle>
            <Link to="/patient/appointments">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => {
                const doctor = mockDoctors.find(d => d.id === appointment.doctorId);
                return (
                  <div key={appointment.id} className="flex items-center space-x-4 p-3 rounded-lg border">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-medical-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-medical-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{doctor?.name}</p>
                      <p className="text-sm text-gray-500">{doctor?.specialization}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {appointment.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {appointment.status}
                    </Badge>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No upcoming appointments</p>
                <Link to="/patient/doctors">
                  <Button className="mt-2" size="sm">Find a Doctor</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Prescriptions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Recent Prescriptions</CardTitle>
            <Link to="/patient/prescriptions">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPrescriptions.length > 0 ? (
              recentPrescriptions.map((prescription) => {
                const doctor = mockDoctors.find(d => d.id === prescription.doctorId);
                return (
                  <div key={prescription.id} className="p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-900">{doctor?.name}</p>
                      <span className="text-xs text-gray-500">{prescription.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{prescription.diagnosis}</p>
                    <div className="flex flex-wrap gap-1">
                      {prescription.medications.slice(0, 2).map((med, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {med.name}
                        </Badge>
                      ))}
                      {prescription.medications.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{prescription.medications.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No recent prescriptions</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
          <CardDescription>Common tasks you might want to do</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/patient/symptoms">
              <Button variant="outline" className="w-full h-auto flex-col py-4">
                <Heart className="w-6 h-6 mb-2 text-medical-600" />
                <span>Track Symptoms</span>
              </Button>
            </Link>
            <Link to="/patient/doctors">
              <Button variant="outline" className="w-full h-auto flex-col py-4">
                <User className="w-6 h-6 mb-2 text-medical-600" />
                <span>Find Doctor</span>
              </Button>
            </Link>
            <Link to="/patient/appointments">
              <Button variant="outline" className="w-full h-auto flex-col py-4">
                <Calendar className="w-6 h-6 mb-2 text-medical-600" />
                <span>Book Appointment</span>
              </Button>
            </Link>
            <Link to="/patient/tests">
              <Button variant="outline" className="w-full h-auto flex-col py-4">
                <TestTube className="w-6 h-6 mb-2 text-medical-600" />
                <span>View Test Results</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientOverview;
