import { RECEIVE_EMPLOYEES, SORT_EMPLOYEES } from '../constants/ActionTypes'

const initialState = {
    employees: [],
    sortByName: false
};

const employees = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_EMPLOYEES:
            return Object.assign({}, state, {
                employees: action.payload
              });
        case SORT_EMPLOYEES:
            return {
                    employees: state.employees.slice().sort(function(a, b){
                            if(state.sortByName) {
                                if(a.first_name > b.first_name) return -1;
                                if(a.first_name < b.first_name) return 1;
                            } else {
                                if(a.first_name < b.first_name) return -1;
                                if(a.first_name > b.first_name) return 1;
                            }
                            return 0;
                        }),
                    sortByName: !state.sortByName
                };
        default:
            return state;
    }
};

export default employees;