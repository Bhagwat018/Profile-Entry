import React, { useState } from 'react'
import './primary.css'
import LoadingBar from 'react-top-loading-bar'
import Button from '@mui/material/Button';


const Primary = (props) => {
  const [progress, setProgress] = useState(0)

  let [data,setdata]=useState()
  let[data1,setdata1]=useState()
  let[data2,setdata2]=useState()
  let[data3,setdata3]=useState()

      const changingitem=(e)=>{
        setdata(e.target.value)
         
          }

  const changingitem1=(e)=>{
    setdata1(e.target.value)
     
      }
      const changingitem2 =(e)=>{
        setdata2(e.target.value)
         
          }
          const changingitem3=(e)=>{
            setdata3(e.target.value)
             
              }

       const finalsumit=(event)=>{
        
           
         event.preventDefault()
   console.log("ok")
         const finalsumitdata= {
           value:data,
       value1:data1,
       value2:data2,
       value3:data3
         } 
       let overall  ={
        ...finalsumitdata,
        id:Math.random().toString()
       }
         
       props.finaldara(overall)
     


        //  console.log(finalsumitdata)
      
         setdata("")
         setdata1("")
         setdata2("")
         setdata3("")

       }
     

  return (
    <>
    <div>
 <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>

      <div className="signup-w3ls">
    <div className="signup-agile1">
        <form action="#" onSubmit={finalsumit} method="post">
        
            
            <div className="form-control">
                <label className="header"> Name :</label>
                <input type="text" id="store_name"   name="store_name" onChange={changingitem} value={data} placeholder=" Name" title="Please enter your First Name" required=""/>
            </div>
            <div className="form-control">
                <label className="header">Last Name :</label>
                <input type="text" id="store_type" name="store_type" onChange={changingitem1} value={data1} placeholder="Last Name" title="Please enter your Last Name" required=""/>
            </div>
            <div className="form-control">
                <label className="header">Contact Number :</label>
                <input type="text" id="contact_number" name="contact_number" onChange={changingitem2} value={data2} placeholder="Contact Number" required=""/>
            </div>
            <div className="form-control">
                <label className="header">Education:</label>
                <input type="text" id="contact_email" name="contact_email" onChange={changingitem3} value={data3} placeholder="Type here..." required=""/>
            </div>
            <input type="submit" onClick={() => setProgress(100)}  className="register" value="Register"/>

        </form>
    </div>
 <div className='contaner'>


 {props.Dummytext.map((non,index)=>(
<div className="card" id={index} key={index} >
<marquee><p style={{textAlign: "center"}}>{non.value4}</p> </marquee>
<Button className='ji' variant="contained" href="#contained-buttons">
{non.value1} Ji
      </Button>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU" id='raja' className="card-img-top" alt="server problem"/>
<div className="card-body">
  <h3>{non.value} {non.value1}</h3>
  <h4>{non.value2}</h4>
  <p className="card-text">{non.value3}</p>

</div>
  
</div>

  ))

}
  
</div>
 </div>
    </>
         
  )
}
export default Primary
