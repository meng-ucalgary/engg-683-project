import React from 'react';
import NavBar from './navbar';
import NavBarStart from './navbarstart';

class TopUp extends React.Component {
  state = {
    filterOption: 0,

    firstName: '',
    middleName: '',
    lastName: '',
    role: 'ADMIN',
    emailId: '',
    password: '',
    status: 'INACTIVE',
  };

  handleFilter = (e) => {
    let pos = '';
    this.setState({
      filterOption: e.target.value,
      role: pos,
    });

    if (e.target.value == 0) {
      pos = 'ADMIN';
    } else if (e.target.value == 1) {
      pos = 'ATTENDANT';
    } else if (e.target.value == 2) {
      pos = 'TECHNICIAN';
    } else if (e.target.value == 3) {
      pos = 'TEACHER';
    } else if (e.target.value == 4) {
      pos = 'STUDENT';
    }

    this.setState({
      filterOption: e.target.value,
      role: pos,
    });
    //this.setState({filterOption: 1});
    console.log('Role Selected', this.state.role);
  };

  handleRegister = (e) => {
    //window.location.reload(false);
    window.alert('Thank you for your payment');

    this.props.history.push('/menu');
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <div className='card' style={this.styles}>
            <div className='card-body'>
              <h5 className='card-title'>Top Up Your Account</h5>
              <div className='row'>
                <input type='text' id='inputFilter' className='form-control' placeholder='Credit Card Number' aria-label='Credit Card Number' aria-describedby='basic-addon2' />
              </div>

              <div className='row'></div>
              <div className='row'>
                <input type='text' id='inputFilter' className='form-control' placeholder='Top-up amount ($)' aria-label='Amount ($)' aria-describedby='basic-addon2' />
              </div>
              <div className='row'>
                <input type='text' id='inputFilter' className='form-control' placeholder='Verification ID' aria-label='Credit Card Verification ID' aria-describedby='basic-addon2' />
              </div>
              <div className='row'>
                <input type='text' id='inputFilter' className='form-control' placeholder='YYYY-MM' aria-label='Credit Card Expiry' aria-describedby='basic-addon2' />
              </div>

              <button onClick={(e) => this.handleRegister(e)} className='btn btn-primary'>
                Pay
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopUp;
