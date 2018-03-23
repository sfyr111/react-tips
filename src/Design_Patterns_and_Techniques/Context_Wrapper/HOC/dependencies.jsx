import React from 'react'

let dependencies = {}

export function register(key, dependency) {
  dependencies[key] = dependency
}

export function fetch(key) {
  if (dependencies.hasOwnProperty(key)) return dependencies[key]
  throw new Error(`"${ key } is not registered as dependency.`)
}

export function wire(Component, deps, mapper) {

  return class Injector extends React.Component {
    constructor(props) {
      super(props)
      this._resolvedDependencies = mapper(...deps.map(fetch))
    }

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          {...this._resolvedDependencies} // {title: "react-patterns"}
        />
      )
    }
  }
}