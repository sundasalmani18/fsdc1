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
import Exmpusecontext from './Exmpusecontext'

function App() {
  return (
    <div className="App">
      {/* <LayoutRoutes />

      <UseStateexmp/>  */}
      {/* <ExmpuseeffectFetch /> */}

     < Exmpusecontext/>
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