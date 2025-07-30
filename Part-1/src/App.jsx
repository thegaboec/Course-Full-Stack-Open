

const Header = (props) =>{
  return (
    <div>
      console.log(props)
      <p> The course you are enrolled in is : {props.course}</p>
    </div>
     
  )

}
const Content =({parts}) => {

  return (
    <div>
      <p>
        The Content to will you see is : 
      </p>
      < Part part ={parts[0]}/>
      < Part part ={parts[1]}/>
      < Part part ={parts[2]}/>
      
     
    </div>
  )

}

const Total = ({parts}) =>{

   const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return(
    <p><strong>Total de ejercicios: {totalExercises}</strong></p>
  )

}

const Part =({part}) => {

  return(
    
        <p>
          {part.name} with {part.exercises} exercises
        </p>
        
  )
}










const App = () => {

  const course = 'Half Stack application development'
 

  const parts =[
    {
      name:'Fundamentals of React',
      exercises:10},
    {
      name:'Using props to pass data',
      exercises:7},
    {
      name:'State of a component',
      exercises:14},
  ]

  

  return (
    <div>
      
      <h1><Header course= {course}/></h1>
      <Content parts= {parts}/>
      <Total parts= {parts}/>
      
    </div>
  )
}

export default App