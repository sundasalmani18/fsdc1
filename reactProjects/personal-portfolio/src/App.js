import logo from './logo.svg';
import './App.css';
import LayoutRoutes from '../routes/layoutRoutes';


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
