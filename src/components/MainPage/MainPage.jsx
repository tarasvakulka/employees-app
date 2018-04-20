import React, {Component} from 'react';
import { getEmployeesData, sortByName } from '../../actions';
import { connect } from 'react-redux';

import Employee from '../Employee/Employee';
import Pagination from '../Pagination/Pagination';
import './MainPage.css';

class MainPage extends Component {

    state = {
        pageItems: []
    }

    render() {
        
        return(
            (this.props.employees && this.props.employees.length !== 0) ?
            <div className="wrapper">
                <button className="btn btn-primary mt-2" onClick={this.handleSort}>Sort first name by alphabet</button>
                <div className="row justify-content-center">
                {
                    this.state.pageItems.map(employeeData => {
                        return( 
                            <Employee key={employeeData.id} data={employeeData}/>
                        );
                    })
                }
                </div>
                <div className="row justify-content-center">
                    <Pagination items={this.props.employees} onChangePage={this.onChangePage}/>
                </div>
            </div>  : 
            <div>Loading...</div>          
        );
    }

    componentDidMount() {
        this.props.onGetEmployees();
    }
    
    handleSort = () => {
        this.props.sortByName();
    }

    onChangePage = (pageItems) => {
        this.setState({ pageItems: pageItems });
        window.scrollTo(0,0);
    }

}
export default connect(
    state => ({
      employees: state.employees
    }),
    dispatch => ({
      onGetEmployees: () => {
        dispatch(getEmployeesData());
      },
      sortByName: () => {
        dispatch(sortByName());
      }
    })
)(MainPage);