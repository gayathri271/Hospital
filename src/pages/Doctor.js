import DoctorForm from '../components/doctor/DoctorForm';
import TimeSlotForm from '../components/doctor/TimeSlotForm';
import DoctorDashboard from '../components/doctor/DoctorDashboard';

function Doctor() {
  return (
    <div className="container">
      <h2 className="form-title">Doctor Panel</h2>
      <DoctorForm />
      <TimeSlotForm />
      <DoctorDashboard />
    </div>
  );
}

export default Doctor;