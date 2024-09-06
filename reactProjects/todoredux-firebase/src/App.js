import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./component/todoForm";
import TodoList from "./component/todoList";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
