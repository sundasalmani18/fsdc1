import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./component/todoForm";
import TodoList from "./component/todoList";
import AddTodo from "./component/addTodo";
import AddUser from "./component/usercomponent/addUser";

function App() {
  return (
    <div className="App">
      {/* <TodoForm /> */}
      <TodoList />
      <AddTodo />

      <AddUser />
    </div>
  );
}

export default App;
