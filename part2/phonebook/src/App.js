import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  
  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const [ searchName, setsearchName ] = useState('')

  const addName=(Event)=>{
    Event.preventDefault()
    setPersons(persons.concat({name:newName,number:newPhone}))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange=(Event)=>{
    if(persons.some(person => person.name === Event.target.value)){
      alert(`${Event.target.value} is already added to phonebook`)}
    else {
      setNewName(Event.target.value)
    }
  }

  const handleNumberChange=(Event)=>{
    setNewPhone(Event.target.value)
  }


  const handleSearch=(Event)=>{
    Event.preventDefault()
    setsearchName(Event.target.value)
  
  }

  const result=persons.map(person=>person.name).map(word=>word.includes(searchName))
  const cleaned=persons.filter((curr, i) => result[i] && curr)
  

  return (
  
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          filter shown with: <input value={searchName} onChange={handleSearch}/>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          
        </div>
        <div>
          
          number: <input value={newPhone} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {cleaned.map((person) => 
          <Person key={person.name} person={person} />
        )}
      </>
    
    </div>
  )
}

export default App