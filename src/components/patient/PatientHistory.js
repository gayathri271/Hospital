import { useState, useEffect } from 'react';
import api from '../../services/api';

function PatientHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get('/patient/history').then((response) => {
      setHistory(response.data);
    }).catch((error) => {
      console.error('Error fetching history:', error);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="form-title">Consultation History</h2>
      <div className="dashboard">
        {history.length === 0 ? (
          <p>No consultations found.</p>
        ) : (
          history.map((consultation) => (
            <div key={consultation.id} className="history-card">
              <p><strong>Doctor:</strong> {consultation.doctorName}</p>
              <p><strong>Hospital:</strong> {consultation.hospital}</p>
              <p><strong>Date:</strong> {consultation.date}</p>
              <p><strong>Time:</strong> {consultation.time}</p>
              <p><strong>Amount:</strong> ${consultation.amount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PatientHistory;