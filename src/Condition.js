import React from 'react'
import './Condition.css'
function Condition(props) {
  function checkedFunLessSeven(){
       
  }
  function funcEqalSeven(){

  }
  function funcGreaterSeven(){
    
  }

  return (
    <> 
    <div className='condition'>
      <div> 
      <input type="radio" name='hello' checked={()=>checkedFunLessSeven()} ></input> <span>Less than 7</span> </div>
      <div> 
      <input type="radio" name='hello' checked={()=>funcEqalSeven()} ></input> <span> Equal to 7</span>
      </div>
      
      <div>
      <input type="radio" name='hello' checked={()=>funcGreaterSeven()}></input><span>Greater than 7</span> </div>

     
     
    </div>
    <div className='amount'>Enter Amount :- 
    <input type="number" min="10" max="20" className=''/>
      {/* <button onClick={()=>myfunc()}>Place bet</button> */}
    </div>
    </>
  )
}

export default Condition
