import { useEffect, useState } from 'react'
import Header from './Components/Header'
import CountryCards from './Components/CountryCards'
import Footer from './Components/Footer'

function App() {
  const[theme, setTheme] = useState("light")
  const [countryData, setCountryData] = useState(null)

  useEffect(()=>{
    if(theme === "dark") {
     document.documentElement.classList.add("dark")
    } else {
     document.documentElement.classList.remove("dark")
    }
 },[theme])
    

    useEffect(()=>{
     fetch("https://restcountries.com/v3.1/all")
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
            setCountryData(p => p  = data.map(d => {
                return {
                    name: d.name.common,
                    region: d.region,
                    nativeName: d.cca2,
                    population: d.population,
                    capital: d.capital,
                    identifier: d.cca3,
                    border: d.borders,
                    currencies: d.currencies,
                    languages: d.languages,
                    subRegion: d.subregion,
                    topLevelDomain: d.tld,
                    flag: d.flags,
                }
            }))
        })
        .catch(err => {
            console.log("error fetching data: " + err)
        })

    },[])

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    
    <>
      <main className="h-screen">
        <Header handleThemeChange={handleThemeChange}/>
        <CountryCards countryData={countryData}/>
        <Footer/>
      </main>
    </>
  )
}

export default App
