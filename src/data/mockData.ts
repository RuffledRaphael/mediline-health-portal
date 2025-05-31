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
  {
    id: '5',
    name: 'Dr. James Wilson',
    email: 'dr.wilson@hospital.com',
    type: 'doctor',
    specialization: 'Orthopedics',
    degree: 'MD, FAAOS',
    hospital: 'Sports Medicine Institute',
    experience: 15,
    consultationFee: 180,
    availability: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '6',
    name: 'Dr. Lisa Park',
    email: 'dr.park@hospital.com',
    type: 'doctor',
    specialization: 'Neurology',
    degree: 'MD, PhD',
    hospital: 'Brain & Spine Center',
    experience: 10,
    consultationFee: 200,
    availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    avatar: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=150&h=150&fit=crop&crop=face',
  },
];

export const mockDoctorReviews = {
  '2': [
    { id: '1', patientName: 'Anonymous', rating: 5, comment: 'Excellent cardiologist! Very thorough and caring.', date: '2024-05-15' },
    { id: '2', patientName: 'John D.', rating: 4, comment: 'Great experience, explained everything clearly.', date: '2024-05-10' },
    { id: '3', patientName: 'Mary S.', rating: 5, comment: 'Dr. Johnson saved my life. Highly recommend!', date: '2024-05-05' },
  ],
  '3': [
    { id: '4', patientName: 'Alice M.', rating: 5, comment: 'Best dermatologist in town. Very professional.', date: '2024-05-20' },
    { id: '5', patientName: 'Bob K.', rating: 4, comment: 'Good treatment, reasonable fees.', date: '2024-05-12' },
  ],
  '4': [
    { id: '6', patientName: 'Sarah L.', rating: 5, comment: 'Amazing with children. My kids love her!', date: '2024-05-18' },
    { id: '7', patientName: 'Tom R.', rating: 5, comment: 'Very patient and understanding pediatrician.', date: '2024-05-08' },
  ],
  '5': [
    { id: '8', patientName: 'Mike H.', rating: 4, comment: 'Helped me recover from my knee injury quickly.', date: '2024-05-22' },
    { id: '9', patientName: 'Jennifer P.', rating: 5, comment: 'Excellent surgeon, great bedside manner.', date: '2024-05-14' },
  ],
  '6': [
    { id: '10', patientName: 'David W.', rating: 5, comment: 'Top neurologist. Very knowledgeable and helpful.', date: '2024-05-25' },
    { id: '11', patientName: 'Emma T.', rating: 4, comment: 'Professional and thorough examination.', date: '2024-05-16' },
  ],
};

export const mockTimeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
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
