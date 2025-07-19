import { useState, useEffect } from 'react';
import api from '../../services/api';

function DoctorSearch() {
  const [filters, setFilters] = useState({ specialization: '', hospital: '', date: '' });
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get('/doctors', { params: filters }).then((response) => {
      setDoctors(response.data);
    }).catch((error) => {
      console.error('Error fetching doctors:', error);
    });
  }, [filters]);

  return (
    <div className="container">
      <h2 className="form-title">Search Doctors</h2>
      <div className="form-container">
        <div className="form-group">
          <input
            type="text"
            placeholder="Specialization"
            className="form-input"
            value={filters.specialization}
            onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Hospital Name"
            className="form-input"
            value={filters.hospital}
            onChange={(e) => setFilters({ ...filters, hospital: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-input"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />
        </div>
        <div className="dashboard">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <p><strong>{doctor.name}</strong></p>
              <p>Specializations: {doctor.specializations.join(', ')}</p>
              <p>Hospital: {doctor.hospital}</p>
              <p>Available Slots: {doctor.availableSlots?.length || 0}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorSearch;