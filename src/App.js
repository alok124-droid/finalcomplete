
import './App.css';
import C1 from "./C1"
import React from 'react';

function App() {
  let [value1,setData]=React.useState(0)
  
 
  return (
    <div className="App">
       <C1 value={value1} data1={setData}></C1>
    </div>
  );
}

export default App;
