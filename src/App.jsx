import { useEffect, useState } from 'react'
import Header from './Components/Header'
import CountryCards from './Components/CountryCards'
import Footer from './Components/Footer'

function App() {
  const[theme, setTheme] = useState("light")

  useEffect(()=>{
     if(theme === "dark") {
      document.documentElement.classList.add("dark")
     } else {
      document.documentElement.classList.remove("dark")
     }
  },[theme])

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  console.log(theme)

  return (
    
    <>
      <main className="h-screen">
        <Header handleThemeChange={handleThemeChange}/>
        <CountryCards/>
        <Footer/>
      </main>
    </>
  )
}

export default App
