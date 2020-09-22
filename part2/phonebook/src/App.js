import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  
  const [ newName, setNewName ] = useState('Name')

  const addName=(Event)=>{
    Event.preventDefault()
    setPersons(persons.concat({name:newName}))
    setNewName('')
  }

  const handleNameChange=(Event)=>{
    if(persons.some(person => person.name === Event.target.value)){
      alert(`${Event.target.value} is already added to phonebook`)}
    else {
      setNewName(Event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map((person, i) => 
          <Person key={person.name} person={person} />
        )}
      </>
    
    </div>
  )
}

export default App