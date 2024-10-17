import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Banner from './component/banner';
import Education from './component/education';
import Experience from './component/experience';
import Skill from './component/skill';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Education/>
     <Experience/>
     <Skill/>
    </div>
  );
}

export default App;
