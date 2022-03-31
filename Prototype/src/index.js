import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Pricing from './pages/Pricing';
import BuyMore from './pages/BuyMore';
import Profile from './pages/Profile';
import ViewReports from './pages/Reports';
import BasicReport from './pages/SampleReportBasic';
import GoldReport from './pages/SampleReportGold';
import Error from './pages/Error';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/reports/sample-report-basic' element={<RequireAuth><BasicReport /></RequireAuth>} />
        <Route path='/reports/sample-report-gold' element={<RequireAuth><GoldReport /></RequireAuth>} />
        <Route path='/reports' element={<RequireAuth><ViewReports /></RequireAuth>} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='/buy-more' element={<BuyMore />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
