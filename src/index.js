import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './Components/App'
import Reducers from './Reducers'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(Reducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);
