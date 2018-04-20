import React, {Component} from 'react';
import './Employee.css';

class Employee extends Component {
    render() {
        return(
            <div className="card mr-3 mt-3">
                <img className="card-img-top" src={this.props.data.avatar} alt="avatar"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.first_name} {this.props.data.last_name}</h5>
                    <div className="card-text">{this.props.data.email}</div>
                    <div className="card-text">{this.props.data.company}</div>
                    <div className="card-text">{this.props.data.adress}</div>
                    <div className="card-text">{this.props.data.phone}</div>
                </div>
            </div>
        );
    }
}

export default Employee;