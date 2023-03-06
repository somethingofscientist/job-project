
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Create from './Pages/Create/Create';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import UpdateBlog  from './Pages/UpdateBlog/UpdateBlog.jsx';

function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/login" element={<Login /> } />
      <Route path="/register" element={<Register /> } />
      <Route path="/create" element={<Create /> } />
      <Route path="/blogDetails/:id" element={<BlogDetails /> } />
      <Route path="/updateBlog/:id" element={<UpdateBlog /> } />
    </Routes>
    </div>
  );
}

export default App;
