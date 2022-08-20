

import React, { useState } from 'react';

// import { ReactDOM } from 'react';
// import Frist from './Component/Frist'; 
import Secand from './Component/Secand';
import Primary from './Component/Add Profilr/Paimary';





let Dummy=[
  {

    
    value: "vijay",
    value1:"Bhagwat",
    value2:6758905437,
    value3:"i am a students of BCA , This is my best Book " ,
    value4: "This is a Example Profile",
       value5:"inline-block"
  },
]

function App() {
  const[info,setinfo]=useState(Dummy)

  let finaltransfer=(e)=>{
   const updatedvalue=[e,...info]

setinfo(updatedvalue)

  }

  return (
    <>      
            {/* <LoadingBar/> */}
            {/* <CardUI/> */}
           <Secand/>
           <Primary Dummytext={info}
           finaldara={finaltransfer}
           />

             {/* <Frist/> */}







    </>
  );
}

export default App;
