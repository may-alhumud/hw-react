import React from 'react'

const Remind = ({settotal,number1,number2}) => {
  return (
<div class=" me-auto-fall">
<button onClick={()=> settotal(Number (number1)%Number (number2))}
type="button" className="btn btn-warning   ">%</button>
</div>
  )
}

export default Remind