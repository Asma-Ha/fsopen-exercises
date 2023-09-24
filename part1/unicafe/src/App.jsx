import { useState } from "react"




const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const StatisticLine  = ({text, value}) => (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
)


const Statistics = ({goodClicks, neutralClicks, badClicks, total}) => {

  if(total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <div>
          <table>
            <StatisticLine  text="good" value = {goodClicks}/>
    
            <StatisticLine  text="neutral" value = {neutralClicks}/>

            <StatisticLine  text="bad" value = {badClicks}/>

            <StatisticLine text="all" value={total} />

            <StatisticLine text="average" value={(goodClicks - badClicks) / total } />

            <StatisticLine text="positive" value={goodClicks * 100 / total } />
          </table>
            
        </div>
  
      </>
    )
  }

}



const App = () => {

  const [goodClicks, setGood] = useState(0)
  const [neutralClicks, setNeutral] = useState(0)
  const [badClicks, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  


  
  const handleGoodClicks = () => {
    const updatedGood = goodClicks + 1
    setGood(updatedGood)
    setTotal(updatedGood + badClicks + neutralClicks)

  }

  const handleNeutralClicks = () => {
    const updatedNeutral = neutralClicks + 1
    setNeutral(updatedNeutral)
    setTotal(goodClicks + updatedNeutral + badClicks)
    
  }

  const handleBadClicks = () => {
    const updatedBad = badClicks + 1
    setBad(updatedBad)
    setTotal(updatedBad + goodClicks + neutralClicks)
  }

  return (
    <div>
      <h1>give feedbacks</h1>
      <div>
        <Button clickHandler={handleGoodClicks} text = "good"/>
        <Button clickHandler={handleNeutralClicks}text = "neutral"/>
        <Button clickHandler={handleBadClicks} text = "bad" />
      </div>


      <Statistics goodClicks={goodClicks} neutralClicks = {neutralClicks} badClicks={badClicks} total = {total}/>

    </div>
  )
}

export default App
