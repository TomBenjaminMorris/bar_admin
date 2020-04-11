import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://hapihour.io/api';
axios.get('/jwt')
  .then(response => {
    axios.defaults.headers.common['Authorization'] = 'jwt ' + response.data;
    console.log('Index request: ' + response.data);
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(error => {
    console.log('Index error: ' + error);
  });

