
import { LoginForm } from "@/components/common/LoginForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Stethoscope, Building2, UserPlus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-medical-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
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
            <div>
              <h1 className="text-xl font-bold text-medical-primary">MediLine Health</h1>
              <p className="text-sm text-gray-600">Connecting Healthcare</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <UserPlus className="w-4 h-4" />
              <span>New here?</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Health,{" "}
                <span className="text-medical-600">Connected</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-lg">
                Seamlessly connect patients, doctors, and hospitals in one comprehensive healthcare platform.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">For Patients</h3>
                <p className="text-sm text-gray-600">Book appointments, track health, access reports</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">For Doctors</h3>
                <p className="text-sm text-gray-600">Manage patients, prescriptions, schedules</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">For Hospitals</h3>
                <p className="text-sm text-gray-600">Lab management, test uploads, reports</p>
              </div>
            </div>

            {/* Registration Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Join MediLine Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button asChild variant="outline" className="h-12">
                  <Link to="/register/patient" className="flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Register as Patient</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12">
                  <Link to="/register/doctor" className="flex items-center justify-center space-x-2">
                    <Stethoscope className="w-4 h-4" />
                    <span>Register as Doctor</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12">
                  <Link to="/register/hospital" className="flex items-center justify-center space-x-2">
                    <Building2 className="w-4 h-4" />
                    <span>Register as Hospital</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-xl">
              <CardContent className="p-0">
                <LoginForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200">
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>© 2024 MediLine Health. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
