
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { Stethoscope, ArrowLeft, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DoctorRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    degree: '',
    specialization: '',
    licenseNumber: '',
    chambers: '',
    availability: [] as string[],
    contactNumber: '',
    bio: ''
  });

  const availabilityOptions = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const specializations = [
    'Cardiology', 'Dermatology', 'Pediatrics', 'Neurology', 'Orthopedics',
    'Gynecology', 'Psychiatry', 'Oncology', 'Gastroenterology', 'Endocrinology'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    if (formData.availability.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one day of availability",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Submitted!",
      description: "Your registration is pending admin approval. You will be notified once approved.",
    });

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvailabilityChange = (day: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      availability: checked 
        ? [...prev.availability, day]
        : prev.availability.filter(d => d !== day)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-medical-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-medical-600 hover:text-medical-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-medical-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-medical-700">Doctor Registration</CardTitle>
            <p className="text-gray-600">Join our network of healthcare professionals</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="degree">Degree(s) *</Label>
                  <Input
                    id="degree"
                    type="text"
                    value={formData.degree}
                    onChange={(e) => handleInputChange('degree', e.target.value)}
                    placeholder="e.g., MD, MBBS, PhD"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization *</Label>
                  <Select value={formData.specialization} onValueChange={(value) => handleInputChange('specialization', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {specializations.map(spec => (
                        <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="licenseNumber">License/Registration Number *</Label>
                  <Input
                    id="licenseNumber"
                    type="text"
                    value={formData.licenseNumber}
                    onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="chambers">Available Chambers/Locations *</Label>
                <Textarea
                  id="chambers"
                  value={formData.chambers}
                  onChange={(e) => handleInputChange('chambers', e.target.value)}
                  placeholder="List your practice locations with addresses"
                  required
                />
              </div>

              <div>
                <Label>Days of Availability *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  {availabilityOptions.map(day => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        id={day}
                        checked={formData.availability.includes(day)}
                        onCheckedChange={(checked) => handleAvailabilityChange(day, checked as boolean)}
                      />
                      <Label htmlFor={day} className="text-sm">{day}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="profilePhoto">Profile Photo</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  <Input type="file" className="hidden" id="profilePhoto" accept="image/*" />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Brief description of your experience and expertise"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-medical-600 hover:bg-medical-700">
                Submit Registration
              </Button>

              <div className="text-center text-sm text-gray-600 space-y-2">
                <p>Your registration will be reviewed by our admin team.</p>
                <p>
                  Already have an account?{' '}
                  <Link to="/" className="text-medical-600 hover:text-medical-700 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorRegister;
