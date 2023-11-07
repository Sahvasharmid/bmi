import React, { useState } from 'react'

const Bmicalculator = ({getdata}) => {
  const[weight,setweight]=useState("")
  const[height,setheight]=useState("")
  const[alert,setalert]=useState(false)
const submit=(e)=>{
  e.preventDefault()
  if(isNaN(weight) || isNaN(height))
  {
  setalert(true)
}
else{
getdata(weight,height)
setalert(false);
e.target.reset();
  }
}
return (
<>

<form onSubmit={submit}>
<div className='container-fluid' id='bmifluid'>
<div className='container' id="bmi1">
<h3 className='heading'>BMI CALCULATOR</h3>
<div className='form-row d-flex'>
<div className='form-group col-md-6 my-3'>
<div className='tr'>
<label>weight(kg):</label>
<input type="text" className='form-control' onChange={(e)=>{setweight(e.target.value)}} placeholder="eg:60" required></input>
</div>
</div>
<div className='form-group  col-md-6 my-3'>
<div className='tr'>
<label for="weight">height(m):</label>
<input type="text" className='form-control'  id="weight" onChange={(e)=>{setheight(e.target.value)}} placeholder="eg:5.2" required></input>
    
</div>
</div>
</div>
<p className='heading'><button type="submit" className='btn btn-primary'>Submit</button></p>
{alert?<div class="alert alert-primary" role="alert">
please enter no's
</div>
:""}
</div>
</div>
   
   
</form>
    
</>
    
)
}

export default Bmicalculator