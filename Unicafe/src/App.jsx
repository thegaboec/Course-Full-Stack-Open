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

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average.toFixed(2)}</td> 
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{positivePercentage.toFixed(2)}%</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackTitle = 'Give feedback'
  const statisticsTitle= 'Statistics'

  const handleFeedbackClick = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      

      < Titulo titulo={feedbackTitle}/>
      < Button handleClick={ () =>handleFeedbackClick('good')} text='good'/>
      < Button handleClick={ () =>handleFeedbackClick('bad')} text='bad'/>
      < Button handleClick={ () =>handleFeedbackClick('neutral')} text='neutral'/>
      < Titulo titulo={statisticsTitle}/>
      < Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App