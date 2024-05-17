import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import Memo from './memo'
import LayoutRoutes from './pages/LayoutRoutes';
import UseStateexmp from './useStateexample'
import ExmpuseeffectFetch from './Exmpuseeffect'
import Exmpusecontext from './Exmp2useeffect'
import A from './exmpcontext/A';
import Exmpuseref from './Exmpuseref'
import Exampleusereducer from './exampleusereducer'
import Exampleusecallback from './exampleusecallback';
import Todo from './examplecrudtodo';
import Curdusereducer from './curdusereducer';
import Exampleusestate from './Exampleusestate';
import Searchaddtask from './search&addtask';
import Login from './loginform';

function App() {
  return (
    <div className="App">
      <Todo  />
     {/* <Exampleusestate/> */}
     {/* <Searchaddtask/> */}
     {/* <Login/> */}
      <Curdusereducer/>
{/* <Exampleusecallback/> */}

{/* <Exampleusereducer/> */}
      {/* <LayoutRoutes />*/}

      {/* <UseStateexmp/>   */}
      {/* <ExmpuseeffectFetch /> */}

      {/* <A name={"sundas"} rollno={20}/> */}
      {/* <Exmpuseref /> */}
      {/* < Exmpusecontext/> */}
      {/* <Memo/> */}
      {/* <Resume name={"sundas"} desgination={"Web developer"} currentJob={true}/> */}
      {/* <Calculator /> */}
      {/* <Check abc={true}/> */}
      {/* <Formemp/> */}
      {/* <MyForm/> */}

      {/* <Myinformation/> */}
      {/* <NotFound />
      <NotFoundUser />
      <NotFoundComponent /> */}
    </div>
  );
}

export default App;
