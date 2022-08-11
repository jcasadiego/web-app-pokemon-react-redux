import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import { logger } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(applyMiddleware(thunk))

const store = createStore(pokemonsReducer, composedEnhancers);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
