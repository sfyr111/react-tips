import React from 'react'
import { InjectContext } from './inject'

export default class Title extends React.Component {
  render() {
    return (
      <InjectContext.Consumer>
        {context => (
          <div>
            {console.log(context)}
            <h1>{context.get('title')}</h1>
          </div>
        )}
      </InjectContext.Consumer>
    )
  }
}