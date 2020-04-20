import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from './axios-bars';

axios.get('/jwt')
  .then(response => {
    axios.defaults.headers.common['Authorization'] = 'jwt ' + response.data;
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(error => {
    console.log('Index error: ' + error);
  });

