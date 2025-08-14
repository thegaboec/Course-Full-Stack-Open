
const Courses=({courses})=>{

    return(
        <div>
            {courses.map(course => (
                <Course key={course.id} course={course} />
            ))}
        </div>
  
    )
}

const Header = ({ name }) => {
  return (
    <h1 >
      {name}
    </h1>
  )
}

const Part =({part})=>{

    return (
        <div>

            {part.name}
            {part.exercises}
        </div>

    )
}

const Content =({parts})=> {

    return (
        <div >
            {parts.map(part =>(
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}
const Total =({parts})=>{

    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>

            Total of excercises: {total}
        </div>
        
    )
}




const Course=({course})=>{

    return (
        <div >
            <Header name={course.name} />
            {console.log("este es",course.name )}
            <Content parts ={course.parts}/>
            <Total parts={course.parts}/>
      
        </div>
    )

}

export default Courses