import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    let middleware;

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(applyMiddleware(thunk));
    } else {
        middleware = applyMiddleware(thunk);
    }

    const store = createStore(rootReducer, initialState, middleware);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
