import logo from './logo.svg';
import './App.css';
import { Layout } from './header-nav/LayoutRoutes';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">

<BrowserRouter>
<Layout/>
</BrowserRouter>

    </div>
  );
}

export default App;
