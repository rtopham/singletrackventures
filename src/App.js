import React, { Fragment } from 'react'
import './App.css'
import Header from './components/layout/Header'
import SocialLinks from './components/layout/SocialLinks'
import Home from './components/pages/Home'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <SocialLinks />
    </Fragment>
  )
}

export default App
