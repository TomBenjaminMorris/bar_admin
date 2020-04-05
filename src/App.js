import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import AdminPane from './containers/AdminPane/AdminPane';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <AdminPane />
        </Layout>
      </div>
    );
  }
}

export default App;
