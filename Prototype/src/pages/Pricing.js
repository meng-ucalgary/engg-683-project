import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const navigate = useNavigate();

  function handleGetStarted(e) {
    e.preventDefault();

    let value = e.target.name;
    window.localStorage.setItem('chosenPlan', value);

    navigate('/register');
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
                <li>Pricing</li>
              </ol>
            </div>
          </div>
        </section>

        <section id='pricing' className='pricing'>
          <div className='container' data-aos='fade-up'>
            <div className='section-title'>
              <h2>Pricing</h2>
              <p>We offer a variety of options for you to choose from. Our competitive pricing ensures everyone can improve their social media reputation.</p>
            </div>

            <div className='row'>
              <div className='col-lg-4' data-aos='fade-up' data-aos-delay='100'>
                <div className='box featured'>
                  <h3>Basic Plan</h3>
                  <h4>
                    <sup>$</sup>9<span>per month</span>
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
                  <a href='#' className='buy-btn' name='basic' onClick={(e) => handleGetStarted(e)}>
                    Get Started
                  </a>
                </div>
              </div>

              <div className='col-lg-4 mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='200'>
                <div className='box featured'>
                  <h3>Gold Plan</h3>
                  <h4>
                    <sup>$</sup>19<span>per month</span>
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
                  <a href='#' className='buy-btn' name='gold' onClick={handleGetStarted}>
                    Get Started
                  </a>
                </div>
              </div>

              <div className='col-lg-4 mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='300'>
                <div className='box featured'>
                  <h3>Ultimate Plan</h3>
                  <h4>
                    <sup>$</sup>39<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className='bx bx-check'></i> Everything in Gold Plan
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Continuous monitoring of your social media accounts
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Weekly updates on reputation risk analysis
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Priority support
                    </li>
                  </ul>
                  <a href='#' className='buy-btn' name='ultimate' onClick={handleGetStarted}>
                    Get Started
                  </a>
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

export default Pricing;
