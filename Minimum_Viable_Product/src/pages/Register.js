import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  const navigate = useNavigate();
  const [confirmPass, setConfirmPass] = useState('');

  let chosenPlan = window.localStorage.getItem('chosenPlan');

  const [message, setMessage] = useState({
    name: '',
    email: '',
    password: '',
    plan: chosenPlan,
    twitterUsername: '',
    facebookUsername: '',
    linkedinUsername: '',
    redditUsername: '',
    instagramUsername: '',
    pinterestUsername: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();

    if (message.password !== confirmPass) {
      window.alert('Passwords do not match');
      return;
    }

    window.localStorage.setItem('name', message.name);
    window.localStorage.setItem('email', message.email);
    window.localStorage.setItem('password', message.password);
    window.localStorage.setItem('plan', message.plan);
    window.localStorage.setItem('twitterUsername', message.twitterUsername);
    window.localStorage.setItem('facebookUsername', message.facebookUsername);
    window.localStorage.setItem('linkedinUsername', message.linkedinUsername);
    window.localStorage.setItem('redditUsername', message.redditUsername);
    window.localStorage.setItem('instagramUsername', message.instagramUsername);
    window.localStorage.setItem('pinterestUsername', message.pinterestUsername);

    window.localStorage.removeItem('chosenPlan');

    window.alert('You have successfully registered! Please login to continue.');
    navigate('/login');
  };

  useEffect(() => {
    if (window.localStorage.getItem('Authenticated') === '1') {
      // window.alert('You are already registered!');
      navigate('/profile');
    }
  }, [navigate]);

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
                <li>Register</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Fill in the form to register for a new account</h3>

            <div className='row'>
              <div className='col-lg-10 col-md-12 px-5'>
                <form id='registerForm' onSubmit={handleRegister}>
                  <h5 className='pb-3'>Personal details</h5>
                  <div className='row px-3'>
                    <div className='form-group col-md-5'>
                      <label htmlFor='formName'>Full Name</label>
                      <input
                        type='text'
                        id='formName'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        required
                        value={message['name']}
                        onChange={(e) => {
                          setMessage({ ...message, name: e.target.value });
                        }}
                      />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formEmail'>Email Address</label>
                      <input
                        type='email'
                        id='formEmail'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        required
                        value={message['email']}
                        onChange={(e) => {
                          setMessage({ ...message, email: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='formCreatePassword'>Create Password</label>
                      <input
                        type='password'
                        id='formCreatePassword'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        required
                        value={message['password']}
                        onChange={(e) => {
                          setMessage({ ...message, password: e.target.value });
                        }}
                      />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formConfirmPassword'>Confirm Password</label>
                      <input
                        type='password'
                        id='formConfirmPassword'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        required
                        value={confirmPass}
                        onChange={(e) => {
                          setConfirmPass(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <h5 className='pt-5'>Social media details</h5>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='formTwitter'>Twitter Username</label>
                      <input
                        type='text'
                        id='formTwitter'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        value={message['twitterUsername']}
                        onChange={(e) => {
                          setMessage({ ...message, twitterUsername: e.target.value });
                        }}
                      />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formFacebook'>Facebook Username</label>
                      <input
                        type='text'
                        id='formFacebook'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        value={message['facebookUsername']}
                        onChange={(e) => {
                          setMessage({ ...message, facebookUsername: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='formLinkedin'>Linkedin Username</label>
                      <input
                        type='text'
                        id='formLinkedin'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        value={message['linkedinUsername']}
                        onChange={(e) => {
                          setMessage({ ...message, linkedinUsername: e.target.value });
                        }}
                      />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formReddit'>Reddit Username</label>
                      <input
                        type='text'
                        id='formReddit'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        value={message['redditUsername']}
                        onChange={(e) => {
                          setMessage({ ...message, redditUsername: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='formInstagram'>Instagram Username</label>
                      <input
                        type='text'
                        id='formInstagram'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        value={message['instagramUsername']}
                        onChange={(e) => {
                          setMessage({ ...message, instagramUsername: e.target.value });
                        }}
                      />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formPinterest'>Pinterest Username</label>
                      <input
                        type='text'
                        id='formPinterest'
                        className='form-control'
                        min='0'
                        maxLength='250'
                        value={message['pinterestUsername']}
                        onChange={(e) => {
                          setMessage({ ...message, pinterestUsername: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <h5 className='pt-5'>Plan details</h5>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='formPlan'>Plan</label>
                      <select
                        id='formPlan'
                        className='form-control'
                        defaultValue={message['plan']}
                        style={{ appearance: 'auto' }}
                        onChange={(e) => {
                          setMessage({ ...message, plan: e.target.value });
                        }}
                      >
                        <option value='basic'>Basic Plan</option>
                        <option value='gold'>Gold Plan</option>
                        <option value='ultimate'>Ultimate Plan</option>
                      </select>
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formAmount'>Upfront Amount</label>
                      <div id='formAmount' className='form-control' style={{ margin: '0', overflow: 'hidden', backgroundColor: '#eaecf4', opacity: '1', boxSizing: 'border-box' }}>
                        {message['plan'] === 'basic' ? '$ 5.00' : message['plan'] === 'gold' ? '$ 10.00' : '$ 30.00'}
                      </div>
                    </div>
                  </div>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-8'>
                      <label htmlFor='formCreditNumber'>Credit Card Number</label>
                      <input type='text' id='formCreditNumber' className='form-control' min='0' maxLength='20' required />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formCreditExpiry'>Credit Card Expiry</label>
                      <input type='text' id='formCreditExpiry' className='form-control' placeholder='MM-YY' min='0' maxLength='5' required />
                    </div>
                  </div>
                  <div className='row pt-3 px-3'>
                    <div className='form-group col-md-8'>
                      <label htmlFor='formCreditName'>Name on Credit Card</label>
                      <input type='text' id='formCreditName' className='form-control' min='0' required />
                    </div>
                    <div className='form-group col'>
                      <label htmlFor='formCreditCVC'>CVC / CVV</label>
                      <input type='text' id='formCreditCVC' className='form-control' min='0' maxLength='3' required />
                    </div>
                  </div>
                  <div className='form-group pt-4'>
                    <button className='btn btn-primary'>Register</button>
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

export default Register;
