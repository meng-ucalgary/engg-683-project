import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-contact'>
              <h3>EyeSea</h3>
              <p>2500 University Dr NW, Calgary, AB T2N 1N4</p>
              <p>
                <strong>Email:</strong> hello@eyesea.ml
              </p>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/'>Home</Link>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/login'>Log in</Link>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/register'>Register</Link>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/reports'>Reports</Link>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/contactus'>Contact us</Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Strengths</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i> <a>Automated Reports</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <a>With Detailed Analysis</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <a>Powered by Machine Learning</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <a>At Low Price</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <a>Brings Great Satisfaction</a>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Social Networks</h4>
              <div className='social-links mt-3'>
                <a href='https://www.twitter.com' className='twitter' rel='noopener noreferrer' target='_blank'>
                  <i className='bx bxl-twitter'></i>
                </a>
                <a href='https://www.facebook.com' className='facebook' rel='noopener noreferrer' target='_blank'>
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href='https://www.instagram.com' className='instagram' rel='noopener noreferrer' target='_blank'>
                  <i className='bx bxl-instagram'></i>
                </a>
                <a href='https://www.skyper.com' className='google-plus' rel='noopener noreferrer' target='_blank'>
                  <i className='bx bxl-skype'></i>
                </a>
                <a href='https://www.linkedin.com' className='linkedin' rel='noopener noreferrer' target='_blank'>
                  <i className='bx bxl-linkedin'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container footer-bottom clearfix'>
        <div className='copyright'>
          &copy; Copyright{' '}
          <strong>
            <span>Arsha</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className='credits'>
          Template from <Link to='https://bootstrapmade.com/'>BootstrapMade</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
