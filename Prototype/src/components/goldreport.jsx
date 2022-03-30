import React from 'react';
import axios from "axios";
import NavBar from "./navbar";
import {

    Link
} from "react-router-dom";

class GoldReport extends React.Component {
    state = {
        graph1: process.env.PUBLIC_URL +'/basicself.png',
        graph3: process.env.PUBLIC_URL +'/goldself.png',
        graph4: process.env.PUBLIC_URL +'/goldtag.png',
        graph2: process.env.PUBLIC_URL +'/basictag.png',
    };



    render() {







            return <React.Fragment>
            <NavBar />

            <div className="card" style={this.styles}>
                <div className="card-body">
                    <h1 className="card-title">Basic Report</h1>
                    <div className="row">
                        <div className="col-sm">
                        <p className="lead">ID: 25968</p>
                             </div>

                        <div className="col-sm">
                        <p className="lead">Date: 2022-03-01</p>
                        </div>


                    </div>

                    <div className="row">
                        <h2>Problematic Posts You Authored</h2>
                        <div class="text-center">
                            <img src={this.state.graph1} class="img-fluid img-thumbnail" alt="..."/>
                        </div>

                    </div>


                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Social Media Site</th>
                                <th>Link</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Facebook</td>
                                <td><a href="https://www.facebook.com/SamoZaen">Look at Bob he was so drunk last night!</a></td>
                                <td>2022-02-01</td>

                            </tr>

                            <tr>
                                <td>Facebook</td>
                                <td><a href="https://www.facebook.com/RestaurantVatra/"> Peter cheated on me...</a></td>
                                <td>2022-02-11</td>

                            </tr>

                            <tr>
                                <td>Twitter</td>
                                <td><a href="https://twitter.com/ccashcitizen"> Alan is such a ...</a></td>
                                <td>2022-02-21</td>

                            </tr>



                        </tbody>
                    </table>
                    <div className="row">
                        <h2>Problematic Posts You are Tagged On</h2>
                        <div class="text-center">
                            <img src={this.state.graph2} class="img-fluid img-thumbnail" alt="..."/>
                        </div>

                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Social Media Site</th>
                                <th>Link</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Facebook</td>
                                <td><a href="https://www.facebook.com/SamoZaen">Check out #### at the PARTY!!!</a></td>
                                <td>2022-01-15</td>

                            </tr>





                        </tbody>
                    </table>

                    <div className="row">
                        <h2>Potential Identification Leaks</h2>


                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Personal Information Type</th>
                                <th>Link</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Phone Number</td>
                                <td><a href="https://www.facebook.com/SamoZaen">Phone Number List for Sale!</a></td>
                                <td>2022-01-15</td>

                            </tr>

                            <tr>
                                <td>Phone Number</td>
                                <td><a href="https://www.facebook.com/SamoZaen">List of phone numbers for spam</a></td>
                                <td>2022-01-15</td>

                            </tr>





                        </tbody>
                    </table>





            </div>

            <div className="card" style={this.styles}>
                <div className="card-body">


                    <div className="row">
                        <h2>Problematic Images From You</h2>
                        <div class="text-center">
                            <img src={this.state.graph3} class="img-fluid img-thumbnail" alt="..."/>
                        </div>

                    </div>


                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Social Media Site</th>
                                <th>Link</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Facebook</td>
                                <td><a href="https://www.facebook.com/SamoZaen">Click Link For Image</a></td>
                                <td>2022-02-01</td>

                            </tr>





                        </tbody>
                    </table>



                    <div className="row">
                        <h2>Problematic Images You are Tagged On</h2>
                        <div class="text-center">
                            <img src={this.state.graph4} class="img-fluid img-thumbnail" alt="..."/>
                        </div>

                    </div>





            </div>


        </React.Fragment>;




    }
}

export default GoldReport;
