
import { useState } from "react"
import Button from "./Button"


const About = () => {
  // var count = 0 
 const [number,setNumber] =  useState(0)
//  const firstItem = state[0]
//  const secondItem = state[1]
//  console.log(firstItem,secondItem)
  const inCount = () =>{    
    setNumber(number + 1)
   }

   const decCount = () => {
    if(number!=0){
      setNumber(number-1)
    }
  }

  return (
    // <div>
    //   <h1>Hello world</h1>
    // </div>
    <div>
      <h1>{number}</h1>
      <button onClick={inCount} >+</button>
      <button onClick={decCount} >-</button>
    </div>
  )
}

export default About