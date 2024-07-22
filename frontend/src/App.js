//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UpdateService from './components/UpdateService';

import CreateService from './components/CreateService';
import CreateCustomer from "./components/createCustomer";
import LoginAdmin from "./components/LoginAdminForm";
import LoginCustomer from "./components/loginCustomer";
import Appointments from './components/Appointments';
import PaymentDetails from './components/PaymentDetails';
import Customers from './components/Customers';
import Services from './components/Services';
import Admin from "./components/Admin";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import CustomerService from './components/CustomerService';
import Makeappointment from './components/makeAppointment';
import LandingPage from './components/LandingPage';

import UpdateCustomer from './components/UpdateCustomer';
import CustomerDashboard from './components/CustomerDashboard';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <ToastContainer />

      <Routes>
     
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/update-customer/:userId" element={<UpdateCustomer />} exact />

        <Route path="/admin" element={<Admin />} exact />
        <Route path="/view-appointments" element={<Appointments />} exact />
        <Route path="/view-services" element={<Services />} exact />
        <Route path="/view-payments" element={<PaymentDetails />} exact />
        <Route path="/view-customers" element={<Customers />} exact />
        <Route path="/update-services/:serviceId" element={<UpdateService />} exact />
    
        <Route path="/create-services" element={<CreateService />} exact />
        <Route path="/create-customers" element={<CreateCustomer />} exact />
        <Route path="/login-admin" element={<LoginAdmin />} exact />
        <Route path="/login-customer" element={<LoginCustomer />} exact />
        <Route path='/services' element={<CustomerService />} exact />
        <Route path='/services/:userId' element={<CustomerService />} exact />
        <Route path='/appointment/:userId/:serviceId' element={<Makeappointment />} exact />
        <Route path='/create' element={<CreateCustomer />} exact />
        <Route path='/dashboard/:userId' element={<CustomerDashboard />} exact />
        <Route path='/logout' element={<Logout />} exact />


      </Routes>
    </Router>
  );
}

export default App;
