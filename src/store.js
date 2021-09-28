import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// variable for initial state, empty object
const initialState = {};

// array for middleWare
const middleWare = [thunk];

let store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

export default store;