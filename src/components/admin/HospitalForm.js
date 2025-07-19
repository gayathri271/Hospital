// import { useState } from 'react';
// import api from '../../services/api';

// function HospitalForm() {
//   const [formData, setFormData] = useState({ name: '', location: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/hospitals', formData);
//       alert('Hospital registered successfully!');
//       setFormData({ name: '', location: '' });
//     } catch (error) {
//       alert('Error registering hospital');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="form-title">Register Hospital</h2>
//       <form className="form-container" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Hospital Name"
//             className="form-input"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Location"
//             className="form-input"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             required
//           />
//         </div>
//         <button type="submit" className="form-button">Register</button>
//       </form>
//     </div>
//   );
// }

// export default HospitalForm;


// src/components/admin/HospitalForm.js
import { useState } from 'react';
import api from '../../services/api';

function HospitalForm() {
  const [formData, setFormData] = useState({ name: '', location: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/hospitals', formData);
      alert('Hospital registered successfully!');
      setFormData({ name: '', location: '' });
      setError(null);
    } catch (error) {
      setError('Error registering hospital: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Register Hospital</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Hospital Name"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            className="form-input"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default HospitalForm;