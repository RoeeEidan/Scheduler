import React from 'react';
import Home from './Screens/Home';
import { Provider } from 'react-redux';
import configureStore from './storeConfig';
import store from './store.js';

// const store = configureStore()

const App = (props) => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App;

