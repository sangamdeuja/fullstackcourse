import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistic = ({ value, text }) => (

  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>

)

const Statistics = ({ good, neutral, bad, all }) => {
  const score = {
    good_score: 1,
    neutral_score: 0,
    bad_score: -1
  }
  const average = (score.good_score * good + score.neutral_score * neutral + score.bad_score * bad) / all
  const positive = (good / all*100).toString() + " %"
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic value={good} text="good" />
          <Statistic value={neutral} text="neutral" />
          <Statistic value={bad} text="bad" />
          <Statistic value={all} text="all" />
          <Statistic value={average} text="average" />
          <Statistic value={positive} text="positive" />
        </tbody>
      </table>
    </div>
  )
}



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))