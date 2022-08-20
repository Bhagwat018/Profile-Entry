import React, { useState } from 'react'
import './Secand.css'

const Secand = () => {

       let[data,setdata]=useState('')
       
  
       var today = new Date();
        let  x=today.toLocaleTimeString();
        let y=today.toLocaleDateString() 
// var time = today.getHours() + ":" + today.getMinutes() + ":" + {x};
 
setInterval(() => {
    setdata(x + 1,)
}, 1000);


  return (
    <div>
   <span> <h1 className='okten'>{y}</h1></span>
   <span><h1 className='okten'>{data}</h1></span>
    </div>
  )
}

export default Secand
