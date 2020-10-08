import React from 'react'

const Filter=({search,handlesearch})=>{


    return (
        <div>
          Filter shown with: <input value={search} onChange={handlesearch}/>
        </div>
    )

}

export default Filter