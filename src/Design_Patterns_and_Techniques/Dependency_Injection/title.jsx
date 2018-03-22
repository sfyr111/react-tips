import React from 'react'

export default function Title(props) {
  console.log(props)
  return (
    <div>
      {props.children}
      <h1>{ props.title }</h1>
    </div>
  )
}