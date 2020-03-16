import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
// import {connect} from 'react-redux';
import userReducer from './userReducer';


//combine reducer(s) into a single root to be used by store
const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
}) 

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));