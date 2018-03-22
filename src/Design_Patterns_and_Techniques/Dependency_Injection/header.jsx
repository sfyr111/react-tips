import React from 'react'

import inject from './inject.jsx';
import Title from './title.jsx';


console.log(React.createContext)
var EnhancedTitle = inject(Title);
export default function Header() {
  return (
    <header>
      <EnhancedTitle title="react inject" data={{ a: 1 }}>
        <span>123</span>
        { do {
          if (1) {
            <div>1</div>
          } else {
            <div>2</div>
          }
        }}
      </EnhancedTitle>
    </header>
  );
}