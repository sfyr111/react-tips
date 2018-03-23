import React, { Component } from 'react';

import dependencies from './dependencies'
import Header from './header'
import { InjectContext } from './inject'
dependencies.register('title', 'context-react-patterns')

class App extends Component {
  render() {
    return (
      <InjectContext.Provider value={dependencies}>
        <Header />
      </InjectContext.Provider>
    )
  }
}

export default App;
