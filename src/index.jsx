import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

if (typeof window !== 'undefined') {
  /* eslint-disable-next-line */
  ReactDOM.render(<App />, document.getElementById('app'))
}