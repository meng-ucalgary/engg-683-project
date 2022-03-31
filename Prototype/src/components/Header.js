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
  const currentPlan = localStorage.getItem('plan');

  return (
    <header id='header' className='fixed-top header-scrolled'>
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <Link to='/'>EyeSea Analytics</Link>
        </h1>

        <nav id='navbar' className='navbar'>
          <ul>
            {loginStatus === '1' ? (
              <React.Fragment>
                <li>
                  <Link className='nav-link' to='/buy-more'>
                    Buy More Reports
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to='/reports'>
                    View Reports
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to='/profile'>
                    Profile
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
                  <Link className='nav-link' to='/pricing'>
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
