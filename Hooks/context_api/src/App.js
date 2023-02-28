import './App.css';
import ChildA from './ChildA';
import React, { createContext } from 'react';

const style = {
  color: "white",
  textAlign: "center",
  padding: "40px 0",
  backgroundColor: "darkred",
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

// context API
// create , provider, consumer

let data = createContext();
let data1 = createContext();

function App() {
  const name = "sahil"
  const gender = "male"

  return (
    <>
      <h1 style={style}>Context API - solve prop drilling</h1>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };