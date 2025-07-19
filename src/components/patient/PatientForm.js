import { useState } from 'react';
import api from '../../services/api';

function PatientForm() {
  const [formData, setFormData] = useState({ name: '', gender: '', dob: '', id: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/patients', formData);
      alert('Patient registered successfully!');
      setFormData({ name: '', gender: '', dob: '', id: '' });
    } catch (error) {
      alert('Error registering patient');
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Register Patient</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <select
            className="form-input"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-input"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Unique ID (e.g., Aadhar, Passport)"
            className="form-input"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default PatientForm;