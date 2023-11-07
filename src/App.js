import React, { useState } from 'react'
import './App.css'
import Bmicalculator from './Bmicalculator'
import BmiList from './bmilist'
import BmiScore from './bmiscore'

function App() {
  const[show,setshow]=useState(false)
  const[changeweight,setchangeweight]=useState({lgweight:"",type:""})
  const[bmi,setbmi]=useState("0")
  const[type,settype]=useState("")
 
  const[range,setrange]=useState({
 underweight:{low:""},
 normal:{low:"",high:""},
 overweight:{low:"",high:""},
 obesityclass1:{low:"",high:""},
 obesityclass2:{low:"",high:""},
 obesityclass3:{low:"",high:""}

    
  
  })
  const onFormSubmit=(w,h)=>{
    const b=calBmi(w,h)
    setbmi(b)
    const t=caltype(b)
    settype(t)
   console.log(w,h)
const r={
  underweight:{low:calRange(18.5,h)},
  normal:{low:calRange(18.5,h),high:calRange(24.9,h)},
  overweight:{low:calRange(25,h),high:calRange(29.9,h)},
  obesityclass1:{low:calRange(30,h),high:calRange(34.9,h)},
  obesityclass2:{low:calRange(35,h),high:calRange(35.9,h)},
  obesityclass3:{high:calRange(40,h)}
}
setrange(r);
const c=calChangeWeight(b,w,r)
setchangeweight(c);
setshow(true);
  }

  const calChangeWeight=(b,w,range)=>{
let chobj;
if(b>24.9)
{
  chobj={
    lgweight:(w-range.normal.high).toFixed(2),
    type:"positive"

  };
  return chobj;
  }  
  else if(b<18.5)
{
  chobj={
    lgweight:(range.normal.low-w).toFixed(2),
    type:"negative"

  };
  return chobj;
}
else{
  chobj={
    lgweight:0,
    type:"normal"
  }
  return chobj;


  };
}
  const calBmi=(w,h)=>{
    return ((w)/((h*h))).toFixed(2);
  }
  const calRange=(b,h)=>
  {
    return (b*h*h).toFixed(2);
    }
const caltype=(bmi)=>{
  if(bmi<18.5)
  {
  return  "Underweight";
  }
  else if(bmi>18.5 && bmi<24.9)
  {
  return "Normal";  
  }
  else if(bmi>24.9 && bmi<29.9)
  {
    return "Overweight"
  }
  else if(bmi>29.9 && bmi<34.9)
  {
    return "Obesity class1"
  }
  else if(bmi>34.9 && bmi<39.9)
  {
    return "Obesity class2"
  }
else if(bmi>39.9)
{
  return "Obesity class3"
}
}
  return (
    <>    

    
    <Bmicalculator getdata={onFormSubmit}></Bmicalculator>
    {show&&
    <div className='grid'>
      <div className='grid1'>
        
  <BmiScore getbmi={bmi}
  gettype={type} getchweight={changeweight}></BmiScore>
  </div>
  <div className='grid2'>
    <BmiList range={range}
    bmi={bmi}></BmiList>
    
    
  </div>
  </div>}
    </>
  )
  }
export default App