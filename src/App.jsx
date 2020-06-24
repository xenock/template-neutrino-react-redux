import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'

import Greetings from './components/greetings.jsx'
import Buttons from './components/buttons.jsx'

import { StateProvider } from './store/context.js'

const message = 'Welcome to template-neutrino-react-redux'
const App = () => (
  <StateProvider>
    <div className='App'>
      <Greetings message={message} />
      <Buttons />
    </div>
  </StateProvider>
)

export default hot(module)(App)
