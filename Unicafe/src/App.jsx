import { useState } from 'react'


const Titulo = ({titulo}) =>{
   
  return(

    <div>

    <h1>{titulo}</h1>
  </div>
  )
  
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal]= useState(0)

  const feedbackTitle = 'Give feedback'
  const statisticsTitle= 'Statistics'

  const handleGoodClick = () => {
    
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad +neutral)
  }


  const handleBadClick = () => {
    
    const updateBad= bad+1
    setBad(updateBad)
    setTotal(updateBad+good+neutral)
  }

   const handleNeutralClick = () => {
    
    const updateNeutral= neutral+1
    setNeutral(updateNeutral)
    setTotal(updateNeutral+good+bad)
  }

  return (
    <div>
      code here

      < Titulo titulo={feedbackTitle}/>
      < Button handleClick={handleGoodClick} text='good'/>
      < Button handleClick={handleBadClick} text='bad'/>
      < Button handleClick={handleNeutralClick} text='neutral'/>
      < Titulo titulo={statisticsTitle}/>
      <p> Good:{good}</p>
      <p> Bad: {bad}</p>
      <p> Neutral:{neutral}</p>
    </div>
  )
}

export default App