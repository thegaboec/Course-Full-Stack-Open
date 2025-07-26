import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello you {props.name}, you are{props.age}years old </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href='https://github.com/mluukkai'> mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age =10
  const beffos=['juan','pedro']
  const friends = [

    {name:'Peter',age:4},
    {name:'Maya',age:10},

  ]

  return(
    <>
      <h1>GREETINGS</h1>
      <Hello name='Maya' age={26+10}/>
      <Hello name={name} age={age}/>
     <Footer/> 
    <p>{friends[0].name}{friends[0].age}</p>
    <p>{friends[1].name} {friends[1].age}</p>
    <p>{beffos}</p>

     </>
  )
  
}

export default App
