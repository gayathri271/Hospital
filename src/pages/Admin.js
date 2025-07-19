import HospitalForm from '../components/admin/HospitalForm';
import DepartmentForm from '../components/admin/DepartmentForm';
import AdminDashboard from '../components/admin/AdminDashboard';

function Admin() {
  return (
    <div className="container">
      <h2 className="form-title">Admin Panel</h2>
      <HospitalForm />
      <DepartmentForm />
      <AdminDashboard />
    </div>
  );
}

export default Admin;