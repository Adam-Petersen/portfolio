import React from 'react'
import ReactDOM from 'react-dom'
import BoardLayout from '../chess/components/BoardLayout'

document.addEventListener('DOMContentLoaded', (test) => {
  console.log(test);
  ReactDOM.render(
    <BoardLayout/>,
    document.body.appendChild(document.createElement('div')),
  )
})
