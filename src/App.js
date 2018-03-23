import React, { Component } from 'react';
import Header from './Design_Patterns_and_Techniques/Context_Wrapper/HOC/header'
import { register } from './Design_Patterns_and_Techniques/Context_Wrapper/HOC/dependencies'

register('awesome-title', 'react-patterns')

class App extends Component {
  render() {
    return <Header />
  }
}

export default App;
