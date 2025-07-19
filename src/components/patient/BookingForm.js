import { useState } from 'react';
import api from '../../services/api';

function BookingForm() {
  const [formData, setFormData] = useState({ doctorId: '', slotId: '', amount: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/bookings', formData);
      alert('Booking successful!');
      setFormData({ doctorId: '', slotId: '', amount: '' });
    } catch (error) {
      alert('Error booking slot');
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Book Appointment</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Doctor ID"
            className="form-input"
            value={formData.doctorId}
            onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Slot ID"
            className="form-input"
            value={formData.slotId}
            onChange={(e) => setFormData({ ...formData, slotId: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Consultation Amount"
            className="form-input"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;