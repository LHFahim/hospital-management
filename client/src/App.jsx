import React from 'react';
import Form from './pages/Form';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddDoctor from './pages/AddDoctor';
import ViewDoctor from './pages/ViewDoctor';
import Appoinment from './pages/Appoinment';
import MedicalServices from './pages/MedicalServices';
import ViewMedicalServices from './pages/ViewMedicalServices';
import RoomDetails from './pages/RoomDetails';
import ViewRoomDetails from './pages/ViewRoomDetails';
import WardDetails from './pages/WardDetails';
import ViewWardDetails from './pages/ViewWardDetails';
import CreateMedicine from './pages/CreateMedicine';
import CreateMedicineView from './pages/CreateMedicineView';
import PatientRegister from './pages/PatientRegister';
import PatientView from './pages/PatientView';
import AppointmentView from './pages/AppointmentView';
import DeleteDoctor from './pages/deleteDoctor';
import PatientSearch from './pages/PatientSearch';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Form />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/ViewDoctor" element={<ViewDoctor />} />
        <Route path="/delete-doctor" element={<DeleteDoctor />} />

        <Route path="/makeAppointment" element={<Appoinment />} />
        <Route path="/viewAppointments" element={<AppointmentView />} />

        <Route path="/addMedicalServices" element={<MedicalServices />} />
        <Route path="viewMedicalServices" element={<ViewMedicalServices />} />
        <Route path="/addRoom" element={<RoomDetails />} />
        <Route path="/viewRooms" element={<ViewRoomDetails />} />
        <Route path="/addWard" element={<WardDetails />} />
        <Route path="/viewWardDetails" element={<ViewWardDetails />} />

        <Route path="/addMedicine" element={<CreateMedicine />} />
        <Route path="/viewMedicineDetails" element={<CreateMedicineView />} />

        <Route path="/register-patient" element={<PatientRegister />} />
        <Route path="/view-patients" element={<PatientView />} />
        <Route path="/search-patients" element={<PatientSearch />} />
      </Routes>
    </div>
  );
}

export default App;
