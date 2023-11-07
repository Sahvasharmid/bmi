
import React from 'react'
import './App.css'
const BmiScore = ({getbmi,gettype,getchweight}) => {
  console.log(getchweight)
  return (
    <div>
       
        <div className='container-fluid' id='bmifluid'>
        <div className='container' id="bmi2">
          <h4 className='heading'>BMI SCORE</h4>
          <h4 className='bmiscore'>{getbmi}</h4>
        
        <h4 className='heading'>{gettype}</h4>
        {getchweight.type==="positive" &&(<h6 className='heading'>you need to lose {getchweight.lgweight} </h6>)}
      
        {getchweight.type==="negative" &&(<h6 className='heading'>you need to gain {getchweight.lgweight} </h6>)}
          {getchweight.type==="normal" && (<h6 className='heading'>you are normal</h6>)}
        </div>
        </div>
        </div>

  )
}

export default BmiScore