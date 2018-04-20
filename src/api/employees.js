export default {
  getEmployees: function() {
        let options = {
            method: 'GET',
            mode: 'cors'
        };
        return fetch('http://localhost:3004/employees', options).then(response => {
            return response.json();
        });
    }
}