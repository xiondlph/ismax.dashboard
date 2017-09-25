import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import './styles/app.css'


render(
    <div className='app'>
        <App />
    </div>,
    document.getElementById('root')
)