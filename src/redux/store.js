import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/rootReducer';
import rootSaga from "./saga/root-saga"
export const sagaMiddleware = createSagaMiddleware()
export default function setupStore(initialState = {}) {

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga)
    return store
}
