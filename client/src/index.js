import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers, 
     composeEnhancers(applyMiddleware(reduxThunk))
     );

ReactDom.render(
<Provider store={store}>
<App/>
</Provider>,
    document.getElementById('root'));