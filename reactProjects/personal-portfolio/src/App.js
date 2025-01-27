import logo from './logo.svg';
import './App.css';
import LayoutRoutes from './routes/layoutRoutes';
import {BrowserRouter}  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {



  return (
    <div className="App">
             
    <BrowserRouter>
      <LayoutRoutes />
    </BrowserRouter>

  </div>
  );
}

export default App;
