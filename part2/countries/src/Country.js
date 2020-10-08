import React from 'react'
import Listing from './Listing'
import Info from './Info'

const Country = ({ cleaned}) => {
    
    if (cleaned.length === 1) {
        return (
            <Info result={cleaned[0]}/>
        )
    } else if (cleaned.length <= 10 && cleaned.length>1) {

        return (
              
            cleaned.map(nation => <Listing key={nation.name} nation={nation} />)
        )
    } else if (cleaned.length >10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else {
        return (
            <p>Write something to find the country</p>
        )
    }

}

export default Country
