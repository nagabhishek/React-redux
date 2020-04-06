import { createStore, combineReducers, applyMiddleware } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iccecream/icecreamReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
});

const store = createStore(rootReducer,applyMiddleware(logger, thunk));

export default store;