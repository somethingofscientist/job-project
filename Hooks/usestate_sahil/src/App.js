import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  
  let updateCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Hello {count} times</h1>
      {console.log(count, setCount)}
      <button onClick={updateCount}>Click Me</button>
    </>
  );
}

export default App;