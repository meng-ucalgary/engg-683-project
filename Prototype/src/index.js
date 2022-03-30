import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Pricing from './pages/Pricing';
import YourAccount from './components/youraccount';
import MainMenu from './components/mainmenu';
import ErrorPage from './components/errorpage';
import ProductLine from './components/productline';
import TopUp from './components/topup';
import ReportManagement from './components/reportmanagement';
import BasicReport from './components/basicreport';
import GoldReport from './components/goldreport';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<ProductLine />} />
        <Route path='/goldreportsample' element={<RequireAuth><GoldReport /></RequireAuth>} />
        <Route path='/basicreportsample' element={<BasicReport />} />
        <Route path='/youraccount' element={<RequireAuth><YourAccount /></RequireAuth>} />
        <Route path='/menu' element={<MainMenu />} />
        <Route path='/report' element={<ReportManagement />} />
        <Route path='/topup' element={<TopUp />} />

        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
