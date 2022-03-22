import React from 'react';
import axios from 'axios';
import NavBarStart from './navbarstart';

class Login extends React.Component {

    state = {
        users: [],
        username: "",
        password: "",
        errorMessage: "",
        redirect: null
        // verifyUser: false,
    };



    getUsername = (e) => {
        console.log('Username: ', e.target.value)
        this.setState({ username: e.target.value })
    }

    getPassword = (e) => {
        console.log('Password: ', e.target.value)
        this.setState({ password: e.target.value })
    }



    render() {
        let hyperlink =  "/menu";
        let errorMessage = "";



        return <React.Fragment>
            <NavBarStart />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-title">
                            Sign in to your account
                        </div>

                        <div className="login-form">

                            <form>
                                <div className="form-group">
                                    <label className="form-control-label" >Username</label>
                                    <input type="text" className="form-control" onChange={(e) => this.getUsername(e)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <input type="password" className="form-control" i onChange={(e) => this.getPassword(e)} />
                                </div>

                                <div >
                                    <a href={hyperlink} className="btn btn-primary">Login</a>


                                </div>
                                <div className="error">
                                    <h>  {errorMessage} </h>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>



        </React.Fragment>;
    }
}

export default Login;