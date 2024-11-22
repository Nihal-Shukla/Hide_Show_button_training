import React from 'react';
import './App.css';

function App() {
  const [status,setStatus]=React.useState(true)
  return (
    <>
    <div className='button'>
    {
    status ? <h1> Hello World !</h1> : null
}

<button onClick={()=>setStatus(false)}>Hide</button><br></br>
  <button onClick={()=>setStatus(true)}>Show</button>
  </div>
    </>
  );
}

export default App;
