import { useState } from 'react';
import api from '../../services/api';

function DepartmentForm() {
  const [formData, setFormData] = useState({ hospitalId: '', name: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/departments', formData);
      alert('Department added successfully!');
      setFormData({ hospitalId: '', name: '' });
    } catch (error) {
      alert('Error adding department');
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Add Department</h2>
      <form className="form-container" onSubmit={handleSubmit}>
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
        <div className="form-group">
          <input
            type="text"
            placeholder="Department Name (e.g., Cardiology)"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Add Department</button>
      </form>
    </div>
  );
}

export default DepartmentForm;