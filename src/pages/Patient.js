import PatientForm from '../components/patient/PatientForm';
import DoctorSearch from '../components/patient/DoctorSearch';
import BookingForm from '../components/patient/BookingForm';
import PatientHistory from '../components/patient/PatientHistory';

function Patient() {
  return (
    <div className="container">
      <h2 className="form-title">Patient Panel</h2>
      <PatientForm />
      <DoctorSearch />
      <BookingForm />
      <PatientHistory />
    </div>
  );
}

export default Patient;