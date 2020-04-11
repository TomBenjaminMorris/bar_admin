import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.get('https://hapihour.io/api/jwt')
  .then(response => {
    console.log(response);
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
