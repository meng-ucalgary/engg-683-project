import React from 'react';

class NavBarStart extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a href='/' className='navbar-brand'>
          eyeSea Analytics
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/register'>
                Register <span className='sr-only'>(current)</span>
              </a>
            </li>

            <li className='nav-item active'>
              <a className='nav-link active' href='/login'>
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBarStart;
