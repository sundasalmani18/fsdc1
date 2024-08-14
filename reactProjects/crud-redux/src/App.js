import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Create from './components/create';
import Update from './components/update';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/update/:id" element={<Update/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
