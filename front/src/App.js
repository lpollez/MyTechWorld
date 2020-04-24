import React, { Component } from 'react';
import MainScreen from './components/MainScreen';

import projectReducer from './redux/project.reducer';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const store = createStore(combineReducers({ project: projectReducer }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainScreen />
        </div>
      </Provider>
    );
  }
}

export default App;
