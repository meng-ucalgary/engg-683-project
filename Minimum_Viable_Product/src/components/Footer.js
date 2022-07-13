import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-contact'>
              <h3>EyeSea Analytics</h3>
              <p>2500 University Dr NW, Calgary, AB T2N 1N4</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href='mailto:hello@eyesea.ml' style={{ color: 'inherit' }}>
                  hello@eyesea.ml
                </a>
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
                  <i className='bx bx-chevron-right'></i> <Link to='/pricing'>Register</Link>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/reports'>Reports</Link>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <Link to='/contact-us'>Contact us</Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Strengths</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i> <span>Automated Reports</span>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <span>With Detailed Analysis</span>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <span>Powered by Machine Learning</span>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <span>At Low Price</span>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <span>Brings Great Satisfaction</span>
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
            <span>EyeSea</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className='credits'>
          Made possible by <b>Arsha</b> template from <a href='https://bootstrapmade.com/'>BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
