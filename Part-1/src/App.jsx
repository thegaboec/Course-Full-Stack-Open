

const Header = (props) =>{
  return (
    <div>
      <p> The course you are enrolled in is : {props.course}</p>
    </div>
     
  )

}
const Content =(props) => {

  return (
    <div>
      <p>
        The Content to will you see is : 
      </p>
      <p>
        {props.content[0].conten} with {props.content[0].exercises} exercises 
      </p>
      <p>
        {props.content[1].conten} with {props.content[1].exercises} exercises 
      </p>
      <p>
        {props.content[2].conten} with {props.content[2].exercises} exercises 
      </p>
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










const App = () => {

  const course = 'Half Stack application development'
 

  const content =[
    {conten:'Fundamentals of React', exercises:10},
    {conten:'Using props to pass data', exercises:7},
    {conten:'State of a component', exercises:14},
  ]

  const total= content[0].exercises+content[1].exercises+content[2].exercises

  return (
    <div>
      
      <h1><Header course= {course}/></h1>
      <Content content= {content}/>
      <Total total= {total}/>
      
    </div>
  )
}

export default App