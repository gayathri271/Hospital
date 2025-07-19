import { useState } from 'react';
import api from '../../services/api';

function DoctorForm() {
  const [formData, setFormData] = useState({
    name: '',
    qualifications: '',
    specializations: '',
    experience: '',
    hospitalId: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        specializations: formData.specializations.split(',').map((s) => s.trim()),
      };
      await api.post('/doctors', data);
      alert('Doctor registered successfully!');
      setFormData({ name: '', qualifications: '', specializations: '', experience: '', hospitalId: '' });
    } catch (error) {
      alert('Error registering doctor');
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Register Doctor</h2>
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
          <input
            type="text"
            placeholder="Qualifications"
            className="form-input"
            value={formData.qualifications}
            onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Specializations (comma-separated)"
            className="form-input"
            value={formData.specializations}
            onChange={(e) => setFormData({ ...formData, specializations: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Years of Experience"
            className="form-input"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Hospital ID"
            className="form-input"
            value={formData.hospitalId}
            onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default DoctorForm;