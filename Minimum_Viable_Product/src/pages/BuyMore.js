import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BuyMore = () => {
  const navigate = useNavigate();

  let currentPlan = window.localStorage.getItem('plan');
  let headingText = currentPlan === 'ultimate' ? 'Top Up Account' : 'Buy More Reports';

  function handleTopUp(e) {
    e.preventDefault();

    let value = e.target.name;
    window.localStorage.setItem('plan', value);

    window.alert('Thank you for your payment.');
    navigate('/profile');
  }

  return (
    <React.Fragment>
      <Header />
      <main id='main'>
        <section className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 style={{ visibility: 'hidden' }}>heading not to be displayed</h4>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>{headingText}</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-0'>{headingText}</h3>
          </div>

          <div id='pricing' className='pricing pt-0'>
            <div className='container'>
              <div className='row px-4'>
                <div className='col-lg-4'>
                  <div className='box featured'>
                    <h3>Basic Plan</h3>
                    <h4>
                      <sup>$</sup>5<span>one time</span>
                    </h4>
                    <ul>
                      <li>
                        <i className='bx bx-check'></i> Contextual analysis for Twitter
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Contextual analysis for Facebook
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Contextual analysis for Linkedin
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Contextual analysis for Reddit
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Overall reputation risk analysis
                      </li>
                    </ul>
                    <button href='#' className='buy-btn' name='basic' onClick={(e) => handleTopUp(e)}>
                      Select
                    </button>
                  </div>
                </div>

                <div className='col-lg-4 mt-4 mt-lg-0'>
                  <div className='box featured'>
                    <h3>Gold Plan</h3>
                    <h4>
                      <sup>$</sup>10<span>one time</span>
                    </h4>
                    <ul>
                      <li>
                        <i className='bx bx-check'></i> Everything in Basic Plan
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Image recognition analytics on Facebook
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Image recognition analytics on Instagram
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Image recognition analytics on Pinterest
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Overall reputation risk analysis
                      </li>
                    </ul>
                    <button href='#' className='buy-btn' name='gold' onClick={handleTopUp}>
                      Select
                    </button>
                  </div>
                </div>

                <div className='col-lg-4 mt-4 mt-lg-0'>
                  <div className='box featured'>
                    <h3>Ultimate Plan</h3>
                    <h4>
                      <sup>$</sup>30<span>per annum</span>
                    </h4>
                    <ul>
                      <li>
                        <i className='bx bx-check'></i> Everything in Gold Plan
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Continuous monitoring of your social media accounts for 12 months
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Monthly updates on reputation risk analysis
                      </li>
                      <li>
                        <i className='bx bx-check'></i> Priority support
                      </li>
                    </ul>
                    <button href='#' className='buy-btn' name='ultimate' onClick={handleTopUp}>
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default BuyMore;
