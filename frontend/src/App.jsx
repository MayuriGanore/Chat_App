import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Toaster/>
    </div>
  );
}

export default App;
