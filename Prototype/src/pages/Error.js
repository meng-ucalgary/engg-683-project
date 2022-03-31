import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
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
                <li>Error</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <div className='container-fluid m-0 p-0'>
              <div className='text-center'>
                <div className='container container-fluid p-0'>
                  <img className='img-fluid' src={process.env.PUBLIC_URL + 'images/not_found.png'} alt='404' style={{ maxHeight: '350px' }} />
                </div>
                <Link to='/' className='btn btn-primary m-5'>
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Error;
