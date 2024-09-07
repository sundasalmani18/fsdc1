import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./component/todoForm";
import TodoList from "./component/todoList";
import AddTodo from "./component/addTodo";

function App() {
  return (
    <div className="App">
      {/* <TodoForm /> */}
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
