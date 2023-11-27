import { useState } from 'react'
import Header from './Components/Header'
import CountryCards from './Components/CountryCards'
import Footer from './Components/Footer'

function App() {
  return (
    
    <>
      <main className="h-screen">
        <Header/>
        <CountryCards/>
        <Footer/>
      </main>
    </>
  )
}

export default App
