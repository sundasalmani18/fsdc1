import logo from './logo.svg';
import './App.css';
import Myinfo from './Resume';
import { NotFound } from './notFound';
import { NotFoundUser } from './notFound';
import NotFoundComponent from './notFound';

function App() {
  return (
    <div className="App">
      <Myinfo name ="sundas"desgination="Web developer"/>
      {/* <NotFound />
      <NotFoundUser />
      <NotFoundComponent /> */}
    </div>
  );
}

export default App;
