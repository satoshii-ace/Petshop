import React from 'react'
import Header from './components/header'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Categories from './components/Categories'
import Offers from './components/Offers'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
        <Header/>
        <Hero />
        <Shop />
        <Categories />
        <Offers />
        <About />
        <Contact />
    </div>
  )
}


export default App