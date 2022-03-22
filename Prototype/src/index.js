import React from "react";
import reactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from "react-router-dom";

import 'font-awesome/css/font-awesome.css';
import './index.css';



import Login from "./components/login";

import {Route, Switch} from 'react-router-dom';



import RegistrationPage from "./components/registerpage";

import YourAccount from "./components/youraccount";

import MainMenu from "./components/mainmenu";

import ErrorPage from './components/errorpage';
import HomePage from './components/homepage';

import ProductLine from './components/productline';
import TopUp from './components/topup';
import ReportManagement from './components/reportmanagement';
import BasicReport from "./components/basicreport";
import GoldReport from './components/goldreport';



reactDom.render(


<BrowserRouter>


    <Switch>

      <Route path="/login" component={Login}/>
      <Route path="/products" component={ProductLine}/>
      <Route path="/goldreportsample" component={GoldReport}/>
      <Route path="/basicreportsample" component={BasicReport}/>
      <Route path='/register' component={RegistrationPage}/>
      <Route path='/youraccount' component={YourAccount}/>
      <Route path="/menu" component={MainMenu} />
      <Route path="/report" component={ReportManagement} />
      <Route path="/topup" component={TopUp} />
      <Route path="/" component={HomePage} />
      <Route path='*' component={ErrorPage}/>
      </Switch>



</BrowserRouter>,document.getElementById('root'));

