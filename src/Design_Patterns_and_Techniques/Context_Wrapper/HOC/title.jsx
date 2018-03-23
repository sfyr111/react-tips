import React from 'react'
import { wire } from './dependencies'

const Title = props => (<h1>{ props.title }</h1>)

export default wire(Title, ['awesome-title'], title => ({ title }))