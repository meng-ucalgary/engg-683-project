import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  let currentPlan = window.localStorage.getItem('plan');

  let modelType = '';

  if (currentPlan !== 'ultimate') {
    modelType = 'Single Payment Model';
  } else {
    modelType = 'Annual Payment Model';
  }

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
                <li>Profile</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Your profile</h3>

            <div className='row'>
              <div className='col-lg-10 px-5'>
                <table className='table table-borderless table-hover'>
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Your Unique ID</th>
                      <td>123456789</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Name</th>
                      <td>{window.localStorage.getItem('name')}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Email</th>
                      <td>{window.localStorage.getItem('email')}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Plan Type</th>
                      <td>{modelType}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Plan Name</th>
                      <td>{currentPlan.toUpperCase()}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Payment Mode</th>
                      <td>Credit/Debit Card</td>
                    </tr>
                  </tbody>
                </table>

                <table className='table table-borderless table-hover'>
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}>Twitter username</th>
                      <td>{window.localStorage.getItem('twitterUsername') || '-'}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Facebook username</th>
                      <td>{window.localStorage.getItem('facebookUsername') || '-'}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Linkedin username</th>
                      <td>{window.localStorage.getItem('linkedinUsername') || '-'}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Reddit username</th>
                      <td>{window.localStorage.getItem('redditUsername') || '-'}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Instagram username</th>
                      <td>{window.localStorage.getItem('instagramUsername') || '-'}</td>
                    </tr>
                    <tr>
                      <th style={{ width: '30%' }}>Pinterest username</th>
                      <td>{window.localStorage.getItem('pinterestUsername') || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Profile;
