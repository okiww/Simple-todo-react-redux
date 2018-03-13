import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Job from './containers/Job';

let store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Job />
      </Provider>
    );
  }
}

export default App;