// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Replace with your backend URL
// });

// export default api;


// src/services/api.js
// Mock API using localStorage
const api = {
  // Simulate POST /login
  post: async (url, data) => {
    if (url === '/login') {
      return new Promise((resolve, reject) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Initialize default admin if no users exist
        if (users.length === 0) {
          users.push({
            id: 'admin1',
            role: 'admin',
            email: 'admin@example.com',
            password: 'Admin@123', // Plain text for simplicity (in production, use hashing)
          });
          localStorage.setItem('users', JSON.stringify(users));
        }
        const user = users.find(
          (u) => u.email === data.email && u.role === data.role && u.password === data.password
        );
        if (!user) {
          return reject({ response: { data: { message: 'Invalid credentials' } } });
        }
        resolve({ data: { message: 'Login successful', user: { id: user.id, role: user.role, email: user.email } } });
      });
    }
    if (url === '/hospitals') {
      return new Promise((resolve, reject) => {
        try {
          const hospitals = JSON.parse(localStorage.getItem('hospitals')) || [];
          const hospitalId = `hospital${hospitals.length + 1}`;
          const newHospital = { id: hospitalId, name: data.name, location: data.location, createdAt: new Date().toISOString() };
          hospitals.push(newHospital);
          localStorage.setItem('hospitals', JSON.stringify(hospitals));
          resolve({ data: { message: 'Hospital registered successfully', hospital: newHospital } });
        } catch (error) {
          reject({ response: { data: { message: 'Error registering hospital' } } });
        }
      });
    }
    return Promise.reject({ response: { data: { message: 'Invalid endpoint' } } });
  },
  // Simulate GET /admin/dashboard
  get: async (url) => {
    if (url === '/admin/dashboard') {
      return new Promise((resolve, reject) => {
        try {
          const hospitals = JSON.parse(localStorage.getItem('hospitals')) || [];
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const doctors = users.filter((u) => u.role === 'doctor').length;
          const patients = users.filter((u) => u.role === 'patient').length;
          resolve({ data: { hospitals: hospitals.length, doctors, patients } });
        } catch (error) {
          reject({ response: { data: { message: 'Error fetching dashboard data' } } });
        }
      });
    }
    return Promise.reject({ response: { data: { message: 'Invalid endpoint' } } });
  },
};

export default api;