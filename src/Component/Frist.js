import React, { useState } from 'react'
import './Frist.css'

const Frist = () => {

let[data,setdata]=useState("")

const changing=(e)=>{
  setdata(data.concat(e.target.value))
}
const ramaji= ()=>{

setdata("")

}
const caluculate=()=>{
  setdata(eval(data,...data))
}


  // timing 
let x=new Date()
let y=x.getHours()
let z = "";

if(y>=1 && y<12)
{
   z="Good morning";
}
else if(y>12 && y<19)
{
  z="Good Afternoon"
}
else if(y>19&& y<24)
{
  z="Good Night"
}




  return (
       <>
          <div style={{textAlien: "center"}} >Hello! sir  {z}</div>
         <div className='nana'>
         <div className="rama"></div>
            <div className="wrapper">

            <input type="text" className='frist' value={data} placeholder='0'  />

            <input type="button"  className="allin" onClick={changing}  value="0" />
            <input type="button"  className="allin" onClick={changing}  value="9" />
            <input type="button"  className="allin" onClick={changing}  value="-" />
            <input type="button"  className="allin" onClick={changing}  value="*" />
            <input type="button"  className="allin" onClick={changing}  value="/" />
            <input type="button"  className="allin" onClick={changing}  value="8" />
            <input type="button"  className="allin" onClick={changing}  value="7" />
            <input type="button"  className="allin" onClick={changing}  value="6" />
            <input type="button"  className="allin" onClick={changing}  value="5" />
            <input type="button"  className="allin" onClick={changing}  value="+" />
            <input type="button"  className="allin" onClick={changing}  value="4" />
            <input type="button"  className="allin" onClick={changing}  value="3" />
            <input type="button"  className="allin" onClick={changing}  value="2" />
            <input type="button"  className="allin" onClick={changing}  value="1" />
            <input type="button"  className="allin "  onClick={caluculate}    value="=" />
            <input type="button" value="Clear" onClick={ramaji} />
            
            
            

         



            </div>





    </div>
    </>
  )
}

export default Frist
