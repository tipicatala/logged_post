import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actions from './actions';
import Box from './components/commentbox';
import List from './components/commentlist';
import Login from './components/login';
import {Link, Route} from 'react-router-dom';



class App extends Component {



  render() {

    return (
      <div className="container">
        <div className='row header'>
          <ul className='row'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to ='/post'>Post a comment</Link></li>
            <li><Link to ='/login'>Login</Link></li>

          </ul>
        </div>
          <div className="row" >
            <div className='col-md-auto'>
            <Route path='/login' component={Login}></Route>
            <Route path='/post' component={Box}></Route>
            <Route path='/' exact component={List}></Route>
            </div>

          </div>
      </div>
    );
  }
}




export default App;
