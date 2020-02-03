import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';


const middlewares = [];
const sagaMiddlewares = createSagaMiddleware();
middlewares.push(sagaMiddlewares);
middlewares.push(logger)
export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddlewares.run(rootSaga);

export const persistor = persistStore(store);