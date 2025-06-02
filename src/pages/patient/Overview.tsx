
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, TestTube, Pill, Heart, ArrowRight } from 'lucide-react';
import HealthMetricsCarousel from '@/components/patient/HealthMetricsCarousel';
import DailyMedications from '@/components/patient/DailyMedications';

const PatientOverview = () => {
  const upcomingAppointments = [
    {
      id: '1',
      doctor: 'Dr. Sarah Johnson',
      specialization: 'Cardiology',
      date: '2024-06-05',
      time: '10:00 AM',
      hospital: 'City General Hospital'
    },
    {
      id: '2',
      doctor: 'Dr. Michael Chen',
      specialization: 'Dermatology',
      date: '2024-06-10',
      time: '2:30 PM',
      hospital: 'Metro Health Center'
    }
  ];

  const recentTests = [
    {
      id: '1',
      name: 'Complete Blood Count (CBC)',
      date: '2024-05-30',
      status: 'completed'
    },
    {
      id: '2',
      name: 'Lipid Panel',
      date: '2024-05-30',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Here's your health overview for today</p>
      </div>

      {/* Compact Top Section - Side by Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Metrics Carousel */}
        <div>
          <HealthMetricsCarousel />
        </div>
        
        {/* Daily Medications */}
        <div>
          <DailyMedications />
        </div>
      </div>

      {/* Bottom Section - Full Width Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-medical-600" />
              Upcoming Appointments
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <a href="/patient/appointments">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.slice(0, 2).map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4 bg-blue-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{appointment.doctor}</h4>
                      <p className="text-sm text-gray-600">{appointment.specialization}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{appointment.date}</span>
                        <span>{appointment.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{appointment.hospital}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Test Results */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <TestTube className="w-5 h-5 mr-2 text-medical-600" />
              Recent Test Results
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <a href="/patient/tests">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTests.map((test) => (
                <div key={test.id} className="border rounded-lg p-4 bg-green-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{test.name}</h4>
                      <p className="text-sm text-gray-600">Date: {test.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">✅ Available</Badge>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-5 h-5 mr-2 text-medical-600" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button asChild className="h-20 flex-col bg-medical-600 hover:bg-medical-700">
              <a href="/patient/doctors">
                <Calendar className="w-6 h-6 mb-2" />
                <span>Book Appointment</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <a href="/patient/tests/request">
                <TestTube className="w-6 h-6 mb-2" />
                <span>Request Test</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <a href="/patient/symptoms">
                <Heart className="w-6 h-6 mb-2" />
                <span>Track Symptoms</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <a href="/patient/prescriptions">
                <Pill className="w-6 h-6 mb-2" />
                <span>View Prescriptions</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientOverview;
