import logo from './logo.svg';
import './App.css';
import LayoutRoutes from './header-nav/LayoutRoutes'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* < LayoutRoutes/> */}
        <HomePage />
      </BrowserRouter>

    </div>
  );
}

export default App;
