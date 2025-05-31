
import { Patient, Doctor, Hospital, Appointment, Prescription, TestResult, SymptomEntry } from '@/types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    type: 'patient',
    dateOfBirth: '1985-03-15',
    gender: 'male',
    bloodGroup: 'O+',
    address: '123 Main St, Springfield, IL',
    phone: '+1 (555) 123-4567',
    emergencyContact: '+1 (555) 987-6543',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
];

export const mockDoctors: Doctor[] = [
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'dr.johnson@hospital.com',
    type: 'doctor',
    specialization: 'Cardiology',
    degree: 'MD, FACC',
    hospital: 'City General Hospital',
    experience: 8,
    consultationFee: 150,
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Dr. Michael Chen',
    email: 'dr.chen@hospital.com',
    type: 'doctor',
    specialization: 'Dermatology',
    degree: 'MD, FAAD',
    hospital: 'Metro Health Center',
    experience: 12,
    consultationFee: 120,
    availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Dr. Emily Rodriguez',
    email: 'dr.rodriguez@hospital.com',
    type: 'doctor',
    specialization: 'Pediatrics',
    degree: 'MD, FAAP',
    hospital: 'Children\'s Medical Center',
    experience: 6,
    consultationFee: 130,
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    avatar: 'https://images.unsplash.com/photo-1594824506688-bd325451ad64?w=150&h=150&fit=crop&crop=face',
  },
];

export const mockHospitals: Hospital[] = [
  {
    id: '5',
    name: 'City General Hospital',
    email: 'admin@citygeneral.com',
    type: 'hospital',
    address: '456 Hospital Ave, Springfield, IL',
    phone: '+1 (555) 234-5678',
    departments: ['Emergency', 'Cardiology', 'Orthopedics', 'Neurology'],
    services: ['MRI', 'CT Scan', 'X-Ray', 'Blood Tests', 'ECG'],
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '2',
    date: '2024-06-05',
    time: '10:00 AM',
    status: 'scheduled',
    reason: 'Regular checkup',
  },
  {
    id: '2',
    patientId: '1',
    doctorId: '3',
    date: '2024-06-10',
    time: '2:30 PM',
    status: 'scheduled',
    reason: 'Skin consultation',
  },
];

export const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '2',
    appointmentId: '1',
    date: '2024-05-28',
    diagnosis: 'Hypertension - Stage 1',
    medications: [
      {
        id: '1',
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        duration: '30 days',
        instructions: 'Take with or without food',
      },
      {
        id: '2',
        name: 'Aspirin',
        dosage: '81mg',
        frequency: 'Once daily',
        duration: '30 days',
        instructions: 'Take with food to avoid stomach upset',
      },
    ],
    testOrders: [
      {
        id: '1',
        testName: 'Complete Blood Count (CBC)',
        reason: 'Routine monitoring',
        status: 'completed',
      },
      {
        id: '2',
        testName: 'Lipid Panel',
        reason: 'Cardiovascular risk assessment',
        status: 'completed',
      },
    ],
    notes: 'Follow up in 4 weeks. Monitor blood pressure daily.',
  },
];

export const mockTestResults: TestResult[] = [
  {
    id: '1',
    patientId: '1',
    testOrderId: '1',
    hospitalId: '5',
    testName: 'Complete Blood Count (CBC)',
    date: '2024-05-30',
    result: 'Normal values within reference range',
    reportUrl: '/mock-reports/cbc-report.pdf',
    status: 'completed',
  },
  {
    id: '2',
    patientId: '1',
    testOrderId: '2',
    hospitalId: '5',
    testName: 'Lipid Panel',
    date: '2024-05-30',
    result: 'Total cholesterol: 195 mg/dL (Normal)',
    reportUrl: '/mock-reports/lipid-report.pdf',
    status: 'completed',
  },
];

export const mockSymptomEntries: SymptomEntry[] = [
  {
    id: '1',
    patientId: '1',
    date: '2024-06-01',
    symptoms: 'Mild headache, feeling tired',
    mood: 'Fair',
    severity: 3,
  },
  {
    id: '2',
    patientId: '1',
    date: '2024-06-02',
    symptoms: 'Headache resolved, energy levels better',
    mood: 'Good',
    severity: 1,
  },
];
