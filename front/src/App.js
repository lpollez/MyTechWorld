import React, { Component } from 'react';
import MainScreen from './Components/MainScreen'

import projectsList from './Reducers/projects.reducer.js';
import likedProjectsList from './Reducers/likedprojects.reducer.js';
import viewOnlyLike from './Reducers/viewonlylike.reducer.js';

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const store = createStore(combineReducers({projectsList, viewOnlyLike, likedProjectsList}));

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
