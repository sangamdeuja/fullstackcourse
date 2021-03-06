import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote]=useState(Array(props.anecdotes.length).fill(0))
  const copy = [...vote]
 
  const numGenerator = ()=>{
    
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  
  }

  const voteAccumulator=()=>{
    copy[selected]+=1
    setVote(copy)
    console.log(copy)
    
  }
  const max= Math.max(...copy)
  const maxIndex = copy.indexOf(max);
  console.log(max)
  console.log(maxIndex)
  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {vote[selected]} votes.</p>
      <p>
        <Button onClick={voteAccumulator} text="vote"/>
        <Button onClick={numGenerator} text="next anecdote" />
      </p>
      <h1>Anecdote with most votes</h1>
      <p> {props.anecdotes[maxIndex]}</p>
      <p> has {vote[maxIndex]} votes.</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)