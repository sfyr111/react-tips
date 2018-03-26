import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import './initialMount.css'

export default class InitialMount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <h1>Fading at Initial Mount</h1>
        </CSSTransitionGroup>
      </div>
    );
  }
}