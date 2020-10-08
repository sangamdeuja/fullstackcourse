import React, { useState ,useEffect} from 'react'
import Filter from './Filter'
import Country from './Country'

import axios from 'axios'

const App = () => {

  const [ country, setCountry ] = useState([])

  const [ searchName, setsearchName ] = useState('')

  const handleSearch=(event)=>{
    event.preventDefault()
    setsearchName(event.target.value)
    
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
      })
  }, [])

  
  let result=country.map(cont=>cont.name.toUpperCase()).map(word=>word.includes(searchName.toUpperCase()))
  
  if(searchName===''){
    result = Array(result.length).fill(false);
  }
  const cleaned=country.filter((curr, i) => result[i] && curr)

  
  return (
    <div>
      <Filter search={searchName} handlesearch={handleSearch}/>
      <Country cleaned={cleaned}/> 
    </div>
  )
}

export default App


 
