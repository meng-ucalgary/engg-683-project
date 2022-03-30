import React from 'react';
import NavBar from './navbar';

class MainMenu extends React.Component {
  state = {
    productImgUrl: process.env.PUBLIC_URL + '/products.png',
    reportImageUrl: process.env.PUBLIC_URL + '/reports.png',
    submitImageUrl: process.env.PUBLIC_URL + '/payments.png',
    managePaymentImageUrl: process.env.PUBLIC_URL + '/requests.png',
  };
  styles = {
    width: 18 + 'rem',
  };
  render() {
    const user = this.props.match.params.user;
    const uid = this.props.match.params.uid;

    let animmanagementhyperlink = '/report';
    let productListhptLink = '/products';
    let requestmanagementhyperlink = '/' + user + '/' + uid + '/requestmanagment';
    let requestsubmissionhyperlink = '/topup';

    return (
      <React.Fragment>
        <NavBar user={user} uid={uid} />
        <div className='row'>
          <div className='card' style={this.styles}>
            <a href={productListhptLink}>
              <img className='card-img-top' src={this.state.productImgUrl} alt='Card cap' />
              <div className='card-body'>
                <h5 className='card-title'>Purchase New Report</h5>
              </div>
            </a>
          </div>

          <div className='card' style={this.styles}>
            <a href={animmanagementhyperlink}>
              <img className='card-img-top' src={this.state.reportImageUrl} alt='Card  cap' />
              <div className='card-body'>
                <h5 className='card-title'>View Created Reports</h5>
              </div>
            </a>
          </div>
          <div className='card' style={this.styles}>
            <a href={requestsubmissionhyperlink}>
              <img className='card-img-top' src={this.state.submitImageUrl} alt='Card  cap' />
              <div className='card-body'>
                <h5 className='card-title'>Top Up Account</h5>
              </div>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainMenu;
