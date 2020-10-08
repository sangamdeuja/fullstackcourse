import React from 'react'


const Language = ({ cont }) => {
    return (
        cont.map((item) => (<li key={item.name}>{item.name}</li>))
    )
}


export default Language