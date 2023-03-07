import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {

    let store = createStore(rootReducer, composeWithDevTools());

    return store;

};

export const createAppAsyncStore = () => {

    // Creamos el Saga Middleware
    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools(),
        ),
    );

    // We init the Watcher Saga before return the store
    sagaMiddleware.run(watcherSaga);

    return store;
    
};