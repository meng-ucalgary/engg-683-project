import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleMenuToggle(e) {
    document.getElementById('navbar').classList.toggle('navbar-mobile');
    document.getElementById('mobile-menu-button').classList.toggle('bi-list');
    document.getElementById('mobile-menu-button').classList.toggle('bi-x');
  }

  function handleLogout(e) {
    logout().then(() => {
      navigate('/');
    });
  }

  const loginStatus = localStorage.getItem('Authenticated');

  return (
    <header id='header' className='fixed-top header-scrolled'>
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <Link to='/'>EyeSea Analytics</Link>
        </h1>

        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <Link className='nav-link' to='/contact-us'>
                Contact us
              </Link>
            </li>
            {loginStatus === '1' ? (
              <React.Fragment>
                <li>
                  <Link className='nav-link' to='/reports'>
                    View reports
                  </Link>
                </li>
                <li>
                  <a className='getstarted' onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
                <li>
                  <Link className='getstarted' to='/login'>
                    Log in
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
          <i id='mobile-menu-button' className='bi bi-list mobile-nav-toggle' onClick={handleMenuToggle}></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
