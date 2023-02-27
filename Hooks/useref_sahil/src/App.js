import './App.css';
import { useState, useRef } from 'react';


const style = {
  color: "white",
  textAlign: "center",
  padding: "40px 0",
  backgroundColor: "crimson",
}
const inputStyle = {
  textAlign: "center",
  fontSize: "40px",
  margin: "40px auto",
  width: "100%",
  border: "none",
  outline: "none"
}
const buttonStyle = {
  textAlign: "center",
  fontSize: "15px",
  padding: "20px 50px",
  border: "none",
  marginRight: "10px",
  borderRadius: "20px",
  cursor: "pointer"
}


function App() {
  const refElement = useRef("");
  const [name, setName] = useState("");
  console.log(refElement)

  const reset = () => {
    setName("")
    refElement.current.focus()
  }

  const handleInput = () => {
    refElement.current.style.color="crimson"
    refElement.current.value="your text change to bcs of useRef (value) crimson"
  }

  return (
    <>
      <h1 style={style}>Learning useRef() </h1>
      <input
        ref={refElement}
        style={inputStyle}
        type="text"
        value={name}
        placeholder="Your Name here"
        onChange={(e) => setName(e.target.value)}
      />
      <button style={buttonStyle} onClick={reset}>Reset</button>
      <button style={buttonStyle} onClick={handleInput}>Change Color</button>
    </>
  );
}

export default App;