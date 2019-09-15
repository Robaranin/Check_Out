//Import Createstore and Apply Middleware
import {createStore,applyMiddleware, compose } from 'redux';
//Import thunk
import thunk from 'redux-thunk';
//Import a reducer
import rootReducer from './Reducers';

const initialState={};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtenstion ? window.devToolsExtenstion() : f => f
  )
)

export default store;
