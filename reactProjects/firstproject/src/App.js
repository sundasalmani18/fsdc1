import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Layout from './pages/Layout'

 function App() {
  return (
    <div className="App">


 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
         
          
        </Route>
      </Routes>
    </BrowserRouter> 


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
