

const Header = (props) =>{
  return (
    <div>
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

const Total = (props) =>{

  return(
    <div>
      <p>
        Total of exercises is: {props.total}
      </p>
    </div>
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
    {name:'Fundamentals of React', exercises:10},
    {name:'Using props to pass data', exercises:7},
    {name:'State of a component', exercises:14},
  ]

  const total= parts[0].exercises+parts[1].exercises+parts[2].exercises

  return (
    <div>
      
      <h1><Header course= {course}/></h1>
      <Content parts= {parts}/>
      <Total total= {total}/>
      
    </div>
  )
}

export default App