import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import employees from '../../reducers/employees';

import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import Navbar from '../Navbar/Navbar';
import './App.css';

let store = createStore(employees, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
              <Navbar/>
              <Switch>
                  <Route exact path="/" component={MainPage}/>
                  <Route path="/about" component={AboutPage}/>
              </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
