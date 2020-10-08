import React from 'react'
import Language from './Language'

const Info = ({ result }) => {
    
    return (
        <div>
            <h2>{result.name}</h2>
            <p>capital {result.capital}</p>
            <p>population {result.population}</p>
            <h2>Spoken Languages</h2>
            <Language cont={result.languages}/>
            <img src={result.flag}  width="200" height="200"alt="National flag"/>

        </div>
    )

}




export default Info