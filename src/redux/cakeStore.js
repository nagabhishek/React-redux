import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iccecream/icecreamReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
});

const store = createStore(rootReducer,applyMiddleware(logger, thunk));

export default store;