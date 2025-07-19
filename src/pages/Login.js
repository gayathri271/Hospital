// import { useState } from 'react';
// import api from '../services/api';

// function Login() {
//   const [formData, setFormData] = useState({ role: '', email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/login', formData);
//       alert('Login successful!');
//       setFormData({ role: '', email: '', password: '' });
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="form-title">Login</h2>
//       <form className="form-container" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <select
//             className="form-input"
//             value={formData.role}
//             onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="admin">Admin</option>
//             <option value="doctor">Doctor</option>
//             <option value="patient">Patient</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Email"
//             className="form-input"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             className="form-input"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//         </div>
//         <button type="submit" className="form-button">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



// src/pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [formData, setFormData] = useState({ role: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert(response.data.message);
      if (formData.role === 'admin') navigate('/admin');
      else if (formData.role === 'doctor') navigate('/doctor');
      else if (formData.role === 'patient') navigate('/patient');
      setFormData({ role: '', email: '', password: '' });
      setError(null);
    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            className="form-input"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
}

export default Login;