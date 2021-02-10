import React, {Component} from 'react';
import Navigation from './src/navigation/Navigation';

import {Provider} from 'react-redux';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
