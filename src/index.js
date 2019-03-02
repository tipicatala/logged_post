import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reduxPromise from 'redux-promise'





const middleware = applyMiddleware(reduxPromise);
const store = createStore(reducers, {}, middleware)

ReactDOM.render(

    <Provider store= {store}>
        <Router>
            <Route path='/' component={App}/>
        </Router>
    </Provider>   
        
        
    , document.getElementById('root'));