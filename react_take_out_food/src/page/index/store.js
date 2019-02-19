import {
    createStore,
    applyMiddleware
} from 'redux';
import mainReducer from './reducers/main';

import thunk from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk));

if (module.hot) {
    module.hot.accept('./reducers/main.js', () => {
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer);
    });
}
export default store;