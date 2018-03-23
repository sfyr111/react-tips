import React, { Component } from 'react';

// import TestComponent from './Design_Patterns_and_Techniques/Async_Nature_Of_setState/Async_Nature_Of_setState'
// import Header from './Design_Patterns_and_Techniques/Dependency_Injection/HOC/header'
import Header from './Design_Patterns_and_Techniques/Dependency_Injection/context/header'
import { InjectContext } from './Design_Patterns_and_Techniques/Dependency_Injection/context/inject'

import './App.css';

class App extends Component {
  render() {
    return (
      <InjectContext.Provider value={{ title: 'React Dependency Injection' }}>
        <Header />
      </InjectContext.Provider>
    );
  }
}

export default App;
