import React from 'react'

function BmiList({range,bmi}) {
  return (
    <div className='container-fluid mb-3' id='bmifluid'>
    <div className='container' id="bmi2">
      <h4 className='heading'>BMI LIST</h4>
      <ul class="list-group">
  <li class="list-group-item">
  <div class="container">
  <div class="row">
    <div class="col">
     <h5>type</h5>
    </div>
    <div class="col">
      <h5>bmi</h5>
    </div>
    <div class="col">
      <h5>weight</h5>
    </div>
  </div>
</div></li>
  <li class={bmi<18.5 ? "border border-danger border-3 list-group-item": "list-group-item"}>
  <div class="container">
  <div class="row">
    <div class="col">
      <h6>underweight</h6>
    </div>
    <div class="col">
      &lt;18.5
    </div>
    <div class="col">
      {"<"+range.normal.low+"kg"}
    </div>
  </div>
</div>
  </li>
  <li class={bmi>18.5&&bmi<24.9 ?"border border-danger border-3 list-group-item" : "list-group-item"}>
  <div class="container">
  <div class="row">
    <div class="col">
      <h6>normal</h6>
    </div>
    <div class="col">
      &gt;19 -&lt;24.9
    </div>
    <div class="col">
      {range.normal.low+"kg-"+range.normal.high+"kg"}
    </div>
  </div>
</div>
  </li>
  <li class={bmi>25&&bmi<29.9?"border border-danger border-3 list-group-item":"list-group-item"}>
  <div class="container">
  <div class="row">
    <div class="col">
      <h6>overweight</h6>
    </div>
    <div class="col">
      &gt;25 -&lt;29.9
    </div>
    <div class="col">
      {range.normal.low+"kg-"+range.normal.high+"kg"}
    </div>
  </div>
</div>
  </li>
  <li class={bmi>29.9&&bmi<34.9?"border border-danger  border-3 list-group-item":"list-group-item"}>
  <div class="container">
  <div class="row">
    <div class="col">
      <h6>obesityclass1</h6>
    </div>
    <div class="col">
      &gt;29.9 -&lt;34.9
    </div>
    <div class="col">
      {range.obesityclass1.low+"kg-"+range.obesityclass1.high+"kg"}
    </div>
  </div>
</div>
  </li>
  <li class={bmi>35&&bmi<39.9?"border border-danger border-3 list-group-item":"list-group-item"}>
  <div class="container">
  <div class="row">
    <div class="col">
      <h6>obesityclass2</h6>
    </div>
    <div class="col">
      &gt;35 -&lt;39.9
    </div>
    <div class="col">
      {range.obesityclass2.low+"kg-"+range.obesityclass2.high+"kg"}
    </div>
  </div>
</div>
  </li>
  <li class={bmi>39.9?"border border-danger border-3 list-group-item":"list-group-item"}>
  <div class="container">
  <div class="row">
    <div class="col">
      <h6>obesityclass3</h6>
    </div>
    <div class="col">
      &gt;39.9
    </div>
    <div class="col">
      {">"+range.obesityclass3.high+"kg"}
    </div>
  </div>
</div>
  </li>
</ul>
      </div>
      </div>
)
}


  

export default BmiList