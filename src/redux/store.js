import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';


const middlewares = [];
middlewares.push(logger)
export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export const persistor = persistStore(store);