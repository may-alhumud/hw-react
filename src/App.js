import { useState } from 'react';
import './App.css';
import Add from './component/Add';
import Munis from './component/Munis';
import Multipliy from './component/Multipliy';
import Divided from './component/Divided';
import Remind from './component/Remind';





function App() {
const [number1,setnumber1]=useState('');
const [number2,setnumber2]=useState('');
const [total,settotal]=useState('');


const onChange1=(e)=>{
setnumber1(e.target.value);
settotal(0)
}

const onChange2=(e)=>{
  setnumber2(e.target.value);
  settotal(0)
  }

  return (

<div className="App">
<h1>Calculator</h1>
<div class="d-flex " >
<input onChange={onChange1}
type="text" 
className="form-control m-2 " 
placeholder="0"
value={number1}/>
<input onChange={onChange2}
type="text" 
className="form-control m-2 " 
placeholder="0"
value={number2}/>
</div>
<div className="d-flex ">
<Add settotal={settotal}  number1={number1} number2={number2}/>
<Munis settotal={settotal}  number1={number1} number2={number2}/>
<Multipliy settotal={settotal}  number1={number1} number2={number2}/>
<Divided settotal={settotal}  number1={number1} number2={number2}/>
<Remind settotal={settotal}  number1={number1} number2={number2}/>
</div>
<input 
type="text " 
className="form-control mt-2" 
placeholder="0"
value={total}/> 
</div>

  );
}

export default App;
