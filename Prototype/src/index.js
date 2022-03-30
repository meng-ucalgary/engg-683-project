import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RegistrationPage from './pages/Register';
import YourAccount from './components/youraccount';
import MainMenu from './components/mainmenu';
import ErrorPage from './components/errorpage';
import ProductLine from './components/productline';
import TopUp from './components/topup';
import ReportManagement from './components/reportmanagement';
import BasicReport from './components/basicreport';
import GoldReport from './components/goldreport';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductLine />} />
        <Route path='/goldreportsample' element={<GoldReport />} />
        <Route path='/basicreportsample' element={<BasicReport />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/youraccount' element={<YourAccount />} />
        <Route path='/menu' element={<MainMenu />} />
        <Route path='/report' element={<ReportManagement />} />
        <Route path='/topup' element={<TopUp />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
