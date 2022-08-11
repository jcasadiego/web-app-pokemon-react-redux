import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import App from './App';
import { logger } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

const store = createStore(pokemonsReducer);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
