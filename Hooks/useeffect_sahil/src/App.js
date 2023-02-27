import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("Ram")

  useEffect(() => {
    console.log('component mounted');
  }, [data])

  const updateCount = () => {
    setCount(count + 1)
  }
  const updateData = () => {
    setData("Siya Ram")
  }

  return (
    <>
      <h1>Hello {count} times</h1>
      <button onClick={updateCount}>Click Me</button>
      <button onClick={updateData}>Update Here</button>
    </>
  );
}

export default App;