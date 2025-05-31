
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserType } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (userType: UserType, credentials: { email: string; password: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUsers = {
  patient: {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    type: 'patient' as UserType,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  doctor: {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'dr.johnson@hospital.com',
    type: 'doctor' as UserType,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
  },
  hospital: {
    id: '3',
    name: 'City General Hospital',
    email: 'admin@citygeneral.com',
    type: 'hospital' as UserType,
    avatar: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=150&h=150&fit=crop',
  },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('mediline_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (userType: UserType, credentials: { email: string; password: string }): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - accept any password for demo
    const mockUser = mockUsers[userType];
    if (mockUser && credentials.email === mockUser.email) {
      setUser(mockUser);
      localStorage.setItem('mediline_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mediline_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
