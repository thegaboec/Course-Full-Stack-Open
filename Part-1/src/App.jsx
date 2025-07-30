

const Header = ({courseName}) =>{
  console.log({courseName})
  return (
    <div>
      
      <p> The course you are enrolled in is : {courseName}</p>
    </div>
     
  )

}
const Content =({parts}) => {

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
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

 
 

  const course ={

    name:'Half Stack application development',
    parts: [
      {
        name:'Fundamentals of React',
        exercises:10
      },
      {
        name:'Using props to pass data',
        exercises:7
      },
      {
        name:'State of a component',
        exercises:14
      }

    ]
  
  }

  return (
    <div>
      
      <h1><Header courseName= {course.name}/></h1>
      <Content parts= {course.parts}/>
      <Total parts= {course.parts}/>
      
    </div>
  )
}

export default App