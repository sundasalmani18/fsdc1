import { BrowserRouter } from 'react-router-dom'
import LayoutRoutes from './header-nav/LayoutRoutes'
import './App.css';
import logo from './logo.svg';
// import HomePage from './pages/HomePage';

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
