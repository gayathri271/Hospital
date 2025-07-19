// // import { useState, useEffect } from 'react';
// // import api from '../../services/api';

// // function AdminDashboard() {
// //   const [data, setData] = useState({
// //     doctors: [],
// //     consultations: 0,
// //     totalRevenue: 0,
// //     revenueByDoctor: {},
// //     revenueByDepartment: {},
// //   });

// //   useEffect(() => {
// //     api.get('/admin/dashboard').then((response) => {
// //       setData(response.data);
// //     }).catch((error) => {
// //       console.error('Error fetching dashboard data:', error);
// //     });
// //   }, []);

// //   return (
// //     <div className="container">
// //       <h2 className="form-title">Admin Dashboard</h2>
// //       <div className="dashboard">
// //         <h3>Associated Doctors</h3>
// //         <ul>
// //           {data.doctors.map((doctor) => (
// //             <li key={doctor.id}>{doctor.name} - {doctor.specializations.join(', ')}</li>
// //           ))}
// //         </ul>
// //         <p>Total Consultations: {data.consultations}</p>
// //         <p>Total Revenue: ${data.totalRevenue}</p>
// //         <h3>Revenue by Doctor</h3>
// //         <ul>
// //           {Object.entries(data.revenueByDoctor).map(([doctorId, revenue]) => (
// //             <li key={doctorId}>Doctor ID {doctorId}: ${revenue}</li>
// //           ))}
// //         </ul>
// //         <h3>Revenue by Department</h3>
// //         <ul>
// //           {Object.entries(data.revenueByDepartment).map(([dept, revenue]) => (
// //             <li key={dept}>{dept}: ${revenue}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;



// // src/components/admin/AdminDashboard.js
// import { useState, useEffect } from 'react';
// import api from '../../services/api';

// function AdminDashboard() {
//   const [dashboardData, setDashboardData] = useState({ hospitals: 0, doctors: 0, patients: 0 });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await api.get('/admin/dashboard');
//         setDashboardData(response.data);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//         setError('Failed to load dashboard data: ' + (error.response?.data?.message || 'Unknown error'));
//       }
//     };
//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="dashboard-title">Admin Dashboard</h2>
//       {error && <div className="error-message">{error}</div>}
//       <div className="dashboard-stats">
//         <div className="stat-card">
//           <h3>Hospitals</h3>
//           <p>{dashboardData.hospitals}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Doctors</h3>
//           <p>{dashboardData.doctors}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Patients</h3>
//           <p>{dashboardData.patients}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;


// src/components/admin/AdminDashboard.js
import { useState, useEffect } from 'react';
import api from '../../services/api';

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({ hospitals: 0, doctors: 0, patients: 0, hospitalList: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/admin/dashboard');
        setDashboardData(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError('Failed to load dashboard data: ' + (error.response?.data?.message || 'Unknown error'));
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <div className="container">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Hospitals</h3>
          <p>{dashboardData.hospitals}</p>
        </div>
        <div className="stat-card">
          <h3>Doctors</h3>
          <p>{dashboardData.doctors}</p>
        </div>
        <div className="stat-card">
          <h3>Patients</h3>
          <p>{dashboardData.patients}</p>
        </div>
      </div>
      <div className="hospital-list">
        <h3>Hospital List</h3>
        {dashboardData.hospitalList.length === 0 ? (
          <p>No hospitals registered.</p>
        ) : (
          <table className="hospital-table">
            <thead>
              <tr>
                <th>Hospital ID</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.hospitalList.map((hospital) => (
                <tr key={hospital.id}>
                  <td>{hospital.id}</td>
                  <td>{hospital.name}</td>
                  <td>{hospital.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;