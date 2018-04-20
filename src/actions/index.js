import apiEmployees from '../api/employees'
import * as types from '../constants/ActionTypes'

const receiveEmployees = employees => ({
  type: types.RECEIVE_EMPLOYEES,
  payload: employees
})

export const getEmployeesData = () => dispatch => {
    apiEmployees.getEmployees().then(response => {
        dispatch(receiveEmployees(response));
    })
}

export const sortByName = () => {
    return {
        type: types.SORT_EMPLOYEES
    };
};

