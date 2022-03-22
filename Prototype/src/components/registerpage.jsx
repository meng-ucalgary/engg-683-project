import React from 'react';
import axios from "axios";

import NavBarStart from './navbarstart';
class RegistrationPage extends React.Component {
    state = {

        filterOption: 0,

        firstName: "",
        middleName: "",
        lastName: "",
        role: "ADMIN",
        emailId: "",
        password: "",
        status: "INACTIVE"


    };

    handleFilter = (e) => {
        let pos = "";
        this.setState({
            filterOption: e.target.value,
            role: pos,
        });

        if(e.target.value==0){
            pos = "ADMIN";

        }else if(e.target.value==1){
            pos = "ATTENDANT";

        }else if(e.target.value==2){
            pos = "TECHNICIAN";

        }else if(e.target.value==3){
            pos = "TEACHER";

        }else if(e.target.value==4){
            pos = "STUDENT";

        }

        this.setState({
            filterOption: e.target.value,
            role: pos,
        });
        //this.setState({filterOption: 1});
        console.log("Role Selected", this.state.role);

    };

    handleFnChange(event) {
        this.setState({firstName: event.target.value})

      }

      handleMnChange(event) {
        this.setState({middleName: event.target.value})

      }

      handleLnChange(event) {
        this.setState({lastName: event.target.value})

      }

      handlePsChange(event) {
        this.setState({password: event.target.value})

      }

      handleEmChange(event) {
        this.setState({emailId: event.target.value})

      }


      handleRegister =(e)=>{





        //window.location.reload(false);
        window.alert("Activation verification has been sent to your email.");

        this.props.history.push("/");






    };


    render() {
        return <React.Fragment>
            <NavBarStart/>
            <div className="container">
            <div className="card" style={this.styles}>

                <div className="card-body">
                    <h5 className="card-title">Register for an Account Now</h5>
                    <div className="row">
                      <div className="col-sm">
                      < input type="text" id="inputFilter"  className="form-control" placeholder="First Name" value={this.state.firstName} onChange={(e) =>this.handleFnChange(e)} aria-label="First Name" aria-describedby="basic-addon2" />

                      </div>
                      <div className="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Middle Name" value={this.state.middleName} onChange={(e) =>this.handleMnChange(e)} aria-label="Middle Name" aria-describedby="basic-addon2" />

                      </div>
                      <div className="col-sm">
                      < input type="text" id="inputFilter" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={(e) =>this.handleLnChange(e)} aria-label="Last Name" aria-describedby="basic-addon2" />

                      </div>


                    </div>

                    <div className="row">


                    </div>
                    <div className="row">
                    < input type="text" id="inputFilter" className="form-control" placeholder="Email Address" value={this.state.emailId} onChange={(e) =>this.handleEmChange(e)} aria-label="Email Address" aria-describedby="basic-addon2" />
                    </div>
                    <div className="row">
                    < input type="text" id="inputFilter" className="form-control" placeholder="Create Password" value={this.state.password} onChange={(e) =>this.handlePsChange(e)} aria-label="Create Password" aria-describedby="basic-addon2" />
                    </div>

                    <button onClick={(e) => this.handleRegister(e)} className="btn btn-primary">Register</button>

                </div>
            </div>
            </div>
        </React.Fragment>;
    }
}

export default RegistrationPage;