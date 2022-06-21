import React from 'react'

const Multiplay = ({settotal,number1,number2}) => {
  return (
<div class=" me-auto">
<button onClick={()=> settotal(Number (number1)*Number (number2))}
type="button" className="btn btn-warning  ">*</button>
</div>
  )
}

export default Multiplay