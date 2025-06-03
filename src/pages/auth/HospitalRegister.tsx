
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, ArrowLeft, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HospitalRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    address: '',
    contactNumber: '',
    testTypes: [] as string[]
  });

  const availableTestTypes = [
    'Blood Tests', 'Urine Analysis', 'X-Ray', 'CT Scan', 'MRI', 'Ultrasound',
    'ECG', 'Echo', 'Endoscopy', 'Biopsy', 'Pathology', 'Microbiology',
    'Biochemistry', 'Hematology', 'Immunology', 'Molecular Diagnostics'
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

    if (formData.testTypes.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one test type",
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

  const handleTestTypeChange = (testType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      testTypes: checked 
        ? [...prev.testTypes, testType]
        : prev.testTypes.filter(t => t !== testType)
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
                <Building2 className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-medical-700">Hospital Registration</CardTitle>
            <p className="text-gray-600">Partner with us to provide quality healthcare services</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hospitalName">Hospital/Clinic Name *</Label>
                  <Input
                    id="hospitalName"
                    type="text"
                    value={formData.hospitalName}
                    onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Official Email *</Label>
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
                  <Label htmlFor="licenseNumber">Hospital License Number *</Label>
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
                <Label htmlFor="address">Full Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter complete hospital/clinic address"
                  required
                />
              </div>

              <div>
                <Label>Available Test Types *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                  {availableTestTypes.map(testType => (
                    <div key={testType} className="flex items-center space-x-2">
                      <Checkbox
                        id={testType}
                        checked={formData.testTypes.includes(testType)}
                        onCheckedChange={(checked) => handleTestTypeChange(testType, checked as boolean)}
                      />
                      <Label htmlFor={testType} className="text-sm">{testType}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="logo">Hospital Logo (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  <Input type="file" className="hidden" id="logo" accept="image/*" />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 mb-2">Required Documents for Verification</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Valid Hospital/Clinic License</li>
                  <li>• Medical Council Registration</li>
                  <li>• Tax Registration Certificate</li>
                  <li>• Insurance Documentation</li>
                </ul>
                <p className="text-xs text-yellow-600 mt-2">
                  Please have these documents ready for the verification process.
                </p>
              </div>

              <Button type="submit" className="w-full bg-medical-600 hover:bg-medical-700">
                Submit Registration
              </Button>

              <div className="text-center text-sm text-gray-600 space-y-2">
                <p>Your registration will be reviewed by our admin team within 2-3 business days.</p>
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

export default HospitalRegister;
