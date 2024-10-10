import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Navbar from './component/navbar';
import Login from './component/login';
import Register from './component/sign-up';


function App() {
  return (
    <>
<BrowserRouter>
    
<Routes>
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/nav" element={<Navbar />} />


</Routes>
   

       
  </BrowserRouter>

  </>
  );
}

export default App;
