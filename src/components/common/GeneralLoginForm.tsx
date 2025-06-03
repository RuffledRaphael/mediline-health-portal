
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { UserType } from '@/types';
import { Loader2 } from 'lucide-react';

const GeneralLoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('patient');
  const { login, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const getDefaultCredentials = () => {
    const defaults = {
      patient: { email: 'john.smith@email.com', password: 'demo123' },
      doctor: { email: 'dr.johnson@hospital.com', password: 'demo123' },
      hospital: { email: 'admin@citygeneral.com', password: 'demo123' },
    };
    return defaults[userType];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(userType, { email, password });
    
    if (success) {
      toast({
        title: 'Login successful!',
        description: `Welcome to your ${userType} dashboard.`,
      });
      navigate(`/${userType}`);
    } else {
      toast({
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    }
  };

  const handleDemoLogin = async () => {
    const defaults = getDefaultCredentials();
    setEmail(defaults.email);
    setPassword(defaults.password);
    
    const success = await login(userType, defaults);
    
    if (success) {
      toast({
        title: 'Demo login successful!',
        description: `Welcome to your ${userType} dashboard.`,
      });
      navigate(`/${userType}`);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">
          Sign In to MediLine
        </CardTitle>
        <CardDescription className="text-center">
          Choose your account type and enter your credentials
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="userType">Account Type</Label>
            <Select value={userType} onValueChange={(value: UserType) => setUserType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="patient">Patient</SelectItem>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="hospital">Hospital</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="space-y-2">
            <Button 
              type="submit" 
              className="w-full bg-medical-600 hover:bg-medical-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              Use Demo Account
            </Button>
          </div>
        </form>
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-xs text-blue-700 text-center">
            <strong>Demo Credentials:</strong><br />
            Email: {getDefaultCredentials().email}<br />
            Password: {getDefaultCredentials().password}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralLoginForm;
