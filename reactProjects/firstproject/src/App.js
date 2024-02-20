import logo from './logo.svg';
import './App.css';
import Myinfo from './Resume';
import { NotFound } from './notFound';
import { NotFoundUser } from './notFound';
import NotFoundComponent from './notFound';
import { Calculator } from './eventsexample';
import { Check } from './ifexample';
import Myinformation from './listexample';


function App() {
  return (
    <div className="App">
      {/* <Myinfo name ="sundas"desgination="Web developer"/> */}
      {/* <Calculator/> */}
      {/* <Check isUser={true}/> */}
      <Myinformation/>
      {/* <NotFound />
      <NotFoundUser />
      <NotFoundComponent /> */}
    </div>
  );
}

export default App;
