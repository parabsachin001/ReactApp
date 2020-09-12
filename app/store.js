import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import LoginReducer from './redux/reducers/loginReducer';

const storeObj = combineReducers({
  login: LoginReducer
});

let store = createStore(storeObj, undefined, applyMiddleware(logger, thunk));

export default store;