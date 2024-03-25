import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    // type 1 :
    // useEffect(()=>{
    //     // api call garera/ backend hit garera data haru lya vaneko huncha yaha
    //     console.log("I m from inside useEffect")
    // },[])
    // type 2 : 
    // useEffect(()=>{
    //     // yo count ma click garyo vaney yo gar vanney type ko kura
    //     console.log("useEffect triggered")
    // },[count,count2])

    // type 3 : 
    useEffect(()=>{
        console.log("UseEffect Triggered")
    })
  return (
    
    <div>
        <h1>Count : {count} </h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>Count2 : {count2}</h1>
        <button onClick={()=>setCount2(count2+1)}>+</button>
    </div>
  )
}

export default UseEffect