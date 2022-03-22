import React from 'react';

import NavBarStart from './navbarstart';

class HomePage extends React.Component {
    state = {



        imageUrl: process.env.PUBLIC_URL +'/frontpage.png',




    };

    styles = {
        width: 18+'rem'


    };
    render() {

        return <React.Fragment>
            <NavBarStart/>

                <h1 className="card-title">Welcome to eyeSea Analytics</h1>
                <h2 >Ultimate Solution to Reform Your Online Reputation!</h2>
                <img className="card-img-top" src={this.state.imageUrl} alt="Card cap"/>




        </React.Fragment>;
    }
}

export default HomePage;