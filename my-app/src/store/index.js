import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from '../components/kredux/index';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import {addReducer, minusReducer} from '../components/reducers'
import combineReducers from '../components/kredux/combineReducer'

export const addReducer = (state = 0, { type, payload = 1 }) => state + payload

export const minusReducer = (state = 0, { type, payload = 1 }) => state - payload

// const rootReducer = combineReducers({addReducer, minusReducer})

const store = createStore(addReducer);

export default store;

function thunk({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
