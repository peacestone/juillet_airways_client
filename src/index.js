import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer  from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css';






const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */composeEnhancers( applyMiddleware(thunkMiddleware) ))

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
