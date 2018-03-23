import React from 'react'
import inject from './inject'
import Title from './title'

const title = 'React Dependency Injection'
const EnhancedTitle = inject(Title)

export default function Header() {
  return (
    <header>
      <EnhancedTitle title={title} />
    </header>
  )
}