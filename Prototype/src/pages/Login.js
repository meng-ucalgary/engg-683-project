import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [message, setMessage] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    let email = window.localStorage.getItem('email');
    let password = window.localStorage.getItem('password');

    if (email === null) {
      window.alert('You must register first');
      return;
    }

    if (message.email === email && message.password === password) {
      login().then(() => {
        navigate('/');
      });
    } else {
      window.alert('Incorrect email or password');
    }
  };

  return (
    <React.Fragment>
      <Header />

      <main id='main'>
        <section id='breadcrumbs' className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 style={{ visibility: 'hidden' }}>heading not to be displayed</h4>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>Log in</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Welcome back</h3>

            <div className='row'>
              <div className='col-lg-5'>
                <img src={`${process.env.PUBLIC_URL + '/images/access_denied.svg'}`} alt='login pic' />
              </div>
              <div className='col-lg-5 p-5'>
                <form id='loginForm' onSubmit={handleLogin}>
                  <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='email'
                      maxLength='100'
                      value={message['email']}
                      required
                      onChange={(e) => {
                        setMessage({ ...message, email: e.target.value });
                      }}
                    />
                  </div>

                  <div className='form-group pt-4'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      id='password'
                      maxLength='100'
                      value={message['password']}
                      required
                      onChange={(e) => {
                        setMessage({ ...message, password: e.target.value });
                      }}
                    />
                  </div>

                  <div className='form-group pt-4'>
                    <button className='btn btn-primary'>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};
export default Login;
