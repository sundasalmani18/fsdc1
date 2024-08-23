import logo from './logo.svg';
import './App.css';
 import { BrowserRouter } from 'react-router-dom'

import './App.css';
import LayoutRoutes from './header-nav/layoutRoutes';

function App() {
  return (
     

    <div className="App">
      <BrowserRouter>
        <LayoutRoutes />
        {/* <HomePage /> */}
      </BrowserRouter>

    </div>
  );
}


export default App;
