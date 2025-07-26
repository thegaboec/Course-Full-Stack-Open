
const Header=(props)=>{
  return (
  <div>
    <p>
      
      El curso es:{props.course} 
    </p>
  </div>
  )

}


const Content=(props)=>{
  return (
    
      <p>Capitulo:----{props.parts[0].name} ----Numero de ejercicios: {props.parts[0].exercises}
      Capitulo:----{props.parts[1].name} ----Numero de ejercicios: {props.parts[1].exercises}
      Capitulo:----{props.parts[2].name} ----Numero de ejercicios: {props.parts[2].exercises}</p>
    
  )

}











const App = () => {
  
  const course = '  Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts=[
    {name: 'Fundamentals of React',exercises:10},
    {name: 'Using props to pass data',exercises:7},
    {name: 'State of a component',exercises:14},
  ]

  return (
    <div>
      <Header course={course} />
      
      <Content parts={parts} />
      
      
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App