import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// variable for initial state, empty object
const initialState = {};

// array for middleWare
const middleWare = [thunk];

let store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;