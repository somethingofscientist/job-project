
import './App.css';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Blog } from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserBlog } from './pages/UserBlog';
import { CreateBlogs } from './pages/CreateBlogs';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Blog/> }/>/
        <Route path='/blogs' element={<Blog />} />
        <Route path='/my-blog' element={<UserBlog />} />
        <Route path='/create-blog' element={<CreateBlogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
