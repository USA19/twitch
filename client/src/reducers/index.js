import {combineReducers} from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducers';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    streams:streamReducer
});