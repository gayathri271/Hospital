import { useState, useEffect } from 'react';
import api from '../../services/api';

function DoctorDashboard() {
  const [data, setData] = useState({
    totalEarnings: 0,
    totalConsultations: 0,
    earningsByHospital: {},
  });

  useEffect(() => {
    api.get('/doctor/dashboard').then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error('Error fetching dashboard data:', error);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="form-title">Doctor Dashboard</h2>
      <div className="dashboard">
        <p>Total Earnings: ${data.totalEarnings}</p>
        <p>Total Consultations: {data.totalConsultations}</p>
        <h3>Earnings by Hospital</h3>
        <ul>
          {Object.entries(data.earningsByHospital).map(([hospitalId, earnings]) => (
            <li key={hospitalId}>Hospital ID {hospitalId}: ${earnings}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DoctorDashboard;