import React from 'react';
import axios from 'axios';
import NavBar from './navbar';
import {

    Link
} from "react-router-dom";


class ReportManagement extends React.Component {
    state = {
        users: [],
        // users:getUsers(),
        filterOption: 0,
        filterText: "",
        pageSize: 4
    };

    handleFilter = (e) => {
        this.setState({ filterOption: e.target.value });
        //this.setState({filterOption: 1});
        console.log("ID clicked", this.state.filterOption);

    };

    handleFilterText = (e) => {
        this.setState({ filterText: e.target.value });
        //this.setState({filterOption: 1});
        console.log("tedt changed", this.state.filterText);

    };

    handleRemove =(e, user)=>{




        const link = "http://localhost:8080/api/v1/users/" + user["userId"];
        axios.delete(link).then(res => {
            console.log(res);
            console.log(res.data);
          });;

          setTimeout(() => {
            window.location.reload(false);
         }, 500);
        //window.location.reload(false);




    };

    async componentDidMount() {
        const { data: users } = await axios.get('http://localhost:8080/api/v1/users/', { headers: { 'Access-Control-Allow-Origin': true } });
        this.setState({ users });

        //const promise = axios.get('https://jsonplaceholder.typicode.com/posts')
    }



    render() {
        console.log(this.state.users);
        const userx = this.props.match.params.user;
        const uid = this.props.match.params.uid;
        let filtered = this.state.users;



            return <React.Fragment>
            <NavBar user = {userx} uid = {uid}/>

            <div className="container">
            </div>



            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Report Type</th>

                        <th>Date</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>25968</td>
                        <td>Basic</td>
                        <td>2022-03-01</td>
                        <td><Link to={"/basicreportsample"} className="btn btn-primary btn-sm">Details</Link></td>
                    </tr>
                    <tr>
                        <td>27563</td>
                        <td>Gold</td>
                        <td>2022-03-05</td>
                        <td><Link to={"/goldreportsample"} className="btn btn-primary btn-sm">Details</Link></td>
                    </tr>

                </tbody>
            </table>

            <div className="row">
                <div className="col-sm">
                </div>

                <div className="col-sm">
                </div>

                <div className="col-sm">
                </div>

                <div className="col-sm">
                </div>


            </div>

        </React.Fragment>;




    }
}

export default ReportManagement;