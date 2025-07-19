// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Admin from './pages/Admin';
// import Doctor from './pages/Doctor';
// import Patient from './pages/Patient';
// import './styles/styles.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/admin" element={<Admin />} />
//             <Route path="/doctor" element={<Doctor />} />
//             <Route path="/patient" element={<Patient />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/patient" element={<Patient />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;