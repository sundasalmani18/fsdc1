import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import { NotFound } from './notFound';
import { NotFoundUser } from './notFound';
import NotFoundComponent from './notFound';
import { Calculator } from './eventsexample';
import { Check } from './ifexample';
import Myinformation from './listexample';
import MyForm from './formexample'
import Formemp from './formemp'


function App() {
  return (
    <div className="App">
      {/* <Resume name={"sundas"} desgination={"Web developer"} currentJob={true}/> */}
      {/* <Calculator /> */}
      {/* <Check abc={true}/> */}
      <Formemp/>
      {/* <MyForm/> */}
      {/* <Myinformation/> */}
      {/* <NotFound />
      <NotFoundUser />
      <NotFoundComponent /> */}
    </div>
  );
}

export default App;
