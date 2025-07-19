import { useState } from 'react';
import api from '../../services/api';

function TimeSlotForm() {
  const [formData, setFormData] = useState({
    hospitalId: '',
    date: '',
    startTime: '',
    endTime: '',
    fee: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/timeslots', formData);
      alert('Time slot added successfully!');
      setFormData({ hospitalId: '', date: '', startTime: '', endTime: '', fee: '' });
    } catch (error) {
      alert('Error adding time slot');
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Add Time Slot</h2>
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
            type="date"
            className="form-input"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="time"
            className="form-input"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="time"
            className="form-input"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Consultation Fee"
            className="form-input"
            value={formData.fee}
            onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Add Time Slot</button>
      </form>
    </div>
  );
}

export default TimeSlotForm;