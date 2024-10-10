import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./component/todoForm";
import TodoList from "./component/todoList";
import AddTodo from "./component/addTodo";
import AddUser from "./component/usercomponent/addUser";
import UserList from "./component/usercomponent/userList";
import Login from "./component/login";
import Signup from "./component/signup";

import { BrowserRouter } from "react-router-dom";
import LayoutRoutes from "./header nav/layoutRoutes";
function App() {
  return (
    <div className="App">

<BrowserRouter>
        <LayoutRoutes />
        {/* <HomePage /> */}
      </BrowserRouter>
      {/* <TodoForm /> */}
      

    
    </div>
  );
}

export default App;
