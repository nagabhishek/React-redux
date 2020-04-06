import { createStore, combineReducers, applyMiddleware } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iccecream/icecreamReducer';
import reducer from './user/userReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: reducer
});

const store = createStore(rootReducer,applyMiddleware(logger, thunk));

export default store;