import React,{useState} from 'react'
import Info from './Info'



const Listing = ({ nation }) => {
    const [show,setShow] = useState(false)

    const clickHandler = () => {
        setShow(!show)
        console.log("this is ".concat(nation.name))
        
    }

    return (
        <div>
            {nation.name}
            <button onClick={clickHandler}>show</button>
            {show ? <Info result={nation} />: ''} 
        </div>
    )
}


export default Listing