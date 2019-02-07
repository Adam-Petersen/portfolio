import React from 'react'
import ReactDOM from 'react-dom'
import BoardLayout from '../chess/components/Game'

document.addEventListener('DOMContentLoaded', (test) => {
  console.log(test);
  ReactDOM.render(
    <Game/>,
    document.body.appendChild(document.createElement('div')),
  )
})
