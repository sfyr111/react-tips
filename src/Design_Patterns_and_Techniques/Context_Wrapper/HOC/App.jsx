import React, { Component } from 'react';

import Header from './header'
import { register } from './dependencies'
register('awesome-title', 'HOC-react-patterns')

class App extends Component {
  render() {
    return <Header />
  }
}

export default App;
