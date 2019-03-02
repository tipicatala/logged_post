import {combineReducers} from 'redux';
import commentReducer from './reducer_comments';
import authReducer from './reducer_auth';
import postReducer from './reducer_post';


const rootreducer = combineReducers({
    auth: authReducer,
    comments: commentReducer,
    post: postReducer

})

export default rootreducer