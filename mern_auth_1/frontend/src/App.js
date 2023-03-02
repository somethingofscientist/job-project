// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Header from './components/Header';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login.js';
import Footer from './components/Footer';
import Pagenotfound from './components/pages/pagenotfound.js';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
