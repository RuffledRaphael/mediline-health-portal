
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Upload, 
  FileText, 
  Users, 
  Building2,
  TestTube
} from 'lucide-react';
import HospitalOverview from '@/pages/hospital/Overview';
import TestUpload from '@/pages/hospital/TestUpload';
import RecentUploads from '@/pages/hospital/RecentUploads';

const HospitalDashboard = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/hospital', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/hospital/upload', icon: Upload, label: 'Upload Test Results' },
    { path: '/hospital/uploads', icon: FileText, label: 'Recent Uploads' },
    { path: '/hospital/patients', icon: Users, label: 'Patient Search' },
    { path: '/hospital/departments', icon: Building2, label: 'Departments' },
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const sidebar = (
    <nav className="p-4">
      <div className="space-y-2">
        {navigationItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <Button
              variant={isActive(item.path, item.exact) ? "default" : "ghost"}
              className={`w-full justify-start ${
                isActive(item.path, item.exact) 
                  ? 'bg-medical-600 text-white hover:bg-medical-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );

  return (
    <DashboardLayout sidebar={sidebar}>
      <Routes>
        <Route index element={<HospitalOverview />} />
        <Route path="upload" element={<TestUpload />} />
        <Route path="uploads" element={<RecentUploads />} />
        <Route path="patients" element={<div className="p-6"><h1 className="text-2xl font-bold">Patient Search - Coming Soon</h1></div>} />
        <Route path="departments" element={<div className="p-6"><h1 className="text-2xl font-bold">Departments - Coming Soon</h1></div>} />
      </Routes>
    </DashboardLayout>
  );
};

export default HospitalDashboard;
