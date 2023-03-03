import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Page2 from './Page/Page2';
import Page3 from './Page/Page3';
import Page1 from './Page/Page1';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Page1 /> }/>
      <Route path="/page2" element={ <Page2 /> }/>
      <Route path="/page3" element={ <Page3 /> }/>
    </Routes>
    <Header />
    </>
  );
}

export default App;
