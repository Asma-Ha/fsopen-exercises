import { useState } from "react"

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const Anecdote = ({text, vote}) => (
  <>
  <p>{text}</p>
  <p>has {vote} votes</p>
  </>
  
)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))


  const handleChangeClick = () => {
    //set state to a random number 
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    display()
  }

  const display = () => {
    console.log(votes)
  }

  const getMax = () => {
    const max = Math.max(...votes)
    return votes.indexOf(max)
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote text={anecdotes[selected]} vote={votes[selected]}/>

        <Button clickHandler = {handleVoteClick} text = "vote"/>
        <Button clickHandler={handleChangeClick} text = "next anecdote"/>
        

        <h1>Anecdote with most votes</h1>
        <Anecdote text={anecdotes[getMax()]} vote={votes[getMax()]}/>
      </div>
    </>
  )
}

export default App
