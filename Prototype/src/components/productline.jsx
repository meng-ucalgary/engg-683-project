import React from 'react';
import NavBar from './navbar';

class ProductLine extends React.Component {
    state = {



        basicUrl: process.env.PUBLIC_URL + '/basicplan.png',
        goldUrl: process.env.PUBLIC_URL + '/goldplan.png',
        subscriptionUrl: process.env.PUBLIC_URL + '/subscriptionplan.png',
        requestImageUrl: process.env.PUBLIC_URL + '/requests.png',




    };
    styles = {
        width: 18+'rem'


    };

    handleRegister =(e)=>{





        //window.location.reload(false);
        window.alert("Thank you for your purchase. When your report is ready, we will notify you through email.");

        this.props.history.push("/menu");






    };

    render() {
        const user = this.props.match.params.user;
        const uid = this.props.match.params.uid;

        let animmanagementhyperlink = "/"+ user + "/" + uid + "/animals";
        let usermanagementhyperlink = "/"+ user + "/" + uid + "/products";
        let requestmanagementhyperlink = "/"+ user + "/" + uid + "/requestmanagment";
        let requestsubmissionhyperlink = "/"+ user + "/" + uid + "/requestsubmission";




            return <React.Fragment>
                <NavBar user = {user} uid = {uid}/>
                <div className="row">
                <div className="card" style={this.styles}>
                <a onClick={(e) => this.handleRegister(e)}>
                    <img className="card-img-top" src={this.state.basicUrl} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Basic Report</h5>

                    </div>
                    </a>
                </div>

                <div className="card" style={this.styles}>
                <a onClick={(e) => this.handleRegister(e)}>
                    <img className="card-img-top" src={this.state.goldUrl} alt="Card  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Gold Report</h5>

                    </div>
                    </a>
                </div>
                <div className="card" style={this.styles}>
                <a onClick={(e) => this.handleRegister(e)}>
                    <img className="card-img-top" src={this.state.subscriptionUrl} alt="Card  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Ultimate Deal</h5>

                    </div>
                    </a>
                </div>



                </div>
            </React.Fragment>;






    }
}

export default ProductLine;