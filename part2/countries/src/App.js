import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  

  useEffect(() => {
    

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)
  }


  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))

  return (
    <div>
      <p>
        find countries: <input value={value} onChange={handleChange} />
      </p>
      {
        filteredCountries.length < 10
        ? filteredCountries.map(country => 
          <div key={country.name.common}>
            <span style={{ display: 'inline-block' }}>
              <Country 
                obj={country}
                detailedInfo={filteredCountries.length === 1}
              />
            </span>
            <span style={{ display: 'inline-block' }}>
              {filteredCountries.length !== 1 && 
                <button onClick={() => setValue(country.name.common)}>button</button>
              }
            </span>
          </div>
          
        )
        : <div>Too many matches, specify another filter</div>
      }
    </div>
  )
}

export default App