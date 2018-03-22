import React from 'react'

// 三元
const Test = function(props) {
  const { flag1, flag2 } = props
  return (
    <div>
      {flag1 && flag2
        ? <h1>11111</h1>
        : <h1>22222</h1>
      }
    </div>
  )
}

// IIFE
const Test = function(props) {
  const { flag1, flag2 } = props
  return (
    <div>
      {
        (() => {
          if (flag1 && flag2) {
            return <h1>11111</h1>
          } else {
            return <h1>22222</h1>
          }
        })()
      }
    </div>
  )
}

// 条件语句
const Test = function(props) {
  const { flag1, flag2 } = props
  const condition = flag1 && flag2
  if (condition) return <h1>111111</h1>
  if (!condition) return <h1>222222</h1>
  return <h1>333333</h1>
}

// do
const Test = function(props) {
  const { flag1, flag2 } = props
  return (
    <div>
      {
        do {
          if (flag1 && flag2) {
            <h1>11111</h1>
          } else {
            <h1>22222</h1>
          }
        }
      }
    </div>
  )
}


export default Test