
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import LoginForm from '@/components/common/LoginForm';
import { UserType } from '@/types';
import { Heart, Users, Building2, Shield, Clock, CheckCircle } from 'lucide-react';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<UserType>('patient');

  const openLogin = (userType: UserType) => {
    setSelectedUserType(userType);
    setIsLoginOpen(true);
  };

  const features = [
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Comprehensive health tracking and medical history management'
    },
    {
      icon: Users,
      title: 'Doctor Network',
      description: 'Connect with qualified healthcare professionals in your area'
    },
    {
      icon: Building2,
      title: 'Hospital Integration',
      description: 'Seamless coordination with medical facilities and test centers'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your medical data is protected with enterprise-grade security'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Access your health information anytime, anywhere'
    },
    {
      icon: CheckCircle,
      title: 'Verified Providers',
      description: 'All healthcare providers are verified and licensed professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-medical-600 rounded-md flex items-center justify-center">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="text-2xl font-bold text-gray-900">MediLine Health</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => openLogin('patient')}
                className="text-medical-700 hover:text-medical-800"
              >
                Patient Login
              </Button>
              <Button
                variant="ghost"
                onClick={() => openLogin('doctor')}
                className="text-medical-700 hover:text-medical-800"
              >
                Doctor Login
              </Button>
              <Button
                variant="ghost"
                onClick={() => openLogin('hospital')}
                className="text-medical-700 hover:text-medical-800"
              >
                Hospital Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Your Health,{' '}
              <span className="text-medical-600">Our Mission</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A comprehensive digital medical system connecting patients, doctors, and hospitals 
              for seamless healthcare coordination and management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => openLogin('patient')}
                className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-3 text-lg"
              >
                I'm a Patient
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => openLogin('doctor')}
                className="border-medical-600 text-medical-600 hover:bg-medical-600 hover:text-white px-8 py-3 text-lg"
              >
                I'm a Doctor
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => openLogin('hospital')}
                className="border-medical-600 text-medical-600 hover:bg-medical-600 hover:text-white px-8 py-3 text-lg"
              >
                I'm a Hospital
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MediLine connects all aspects of your healthcare journey in one secure, 
              easy-to-use platform designed for modern medical care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-medical-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Type Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Access Portal
            </h2>
            <p className="text-xl text-gray-600">
              Different interfaces designed for different healthcare roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-medical-500 transition-colors duration-300 cursor-pointer transform hover:scale-105 transition-transform"
                  onClick={() => openLogin('patient')}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-medical-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Patient Portal</CardTitle>
                <CardDescription className="text-gray-600">
                  Track your health, book appointments, and manage your medical journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Symptom tracking & health dashboard</li>
                  <li>• Find & book doctor appointments</li>
                  <li>• View prescriptions & test results</li>
                  <li>• Manage medication schedules</li>
                </ul>
                <Button className="w-full mt-6 bg-medical-600 hover:bg-medical-700">
                  Access Patient Portal
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-medical-500 transition-colors duration-300 cursor-pointer transform hover:scale-105 transition-transform"
                  onClick={() => openLogin('doctor')}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-medical-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Doctor Portal</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage patients, appointments, and medical records efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• View daily appointment schedule</li>
                  <li>• Access patient medical history</li>
                  <li>• Write digital prescriptions</li>
                  <li>• Order tests and view results</li>
                </ul>
                <Button className="w-full mt-6 bg-medical-600 hover:bg-medical-700">
                  Access Doctor Portal
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-medical-500 transition-colors duration-300 cursor-pointer transform hover:scale-105 transition-transform"
                  onClick={() => openLogin('hospital')}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-medical-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Hospital Portal</CardTitle>
                <CardDescription className="text-gray-600">
                  Upload test results and coordinate with healthcare providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Upload patient test reports</li>
                  <li>• Manage lab results & diagnostics</li>
                  <li>• Coordinate with doctors</li>
                  <li>• Track department activities</li>
                </ul>
                <Button className="w-full mt-6 bg-medical-600 hover:bg-medical-700">
                  Access Hospital Portal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-medical-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">MediLine Health</span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting healthcare providers and patients for better health outcomes.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 MediLine Health. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Welcome to MediLine</DialogTitle>
            <DialogDescription>
              Please log in to access your dashboard
            </DialogDescription>
          </DialogHeader>
          <LoginForm userType={selectedUserType} onClose={() => setIsLoginOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
