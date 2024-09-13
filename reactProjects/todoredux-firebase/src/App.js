import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./component/todoForm";
import TodoList from "./component/todoList";
import AddTodo from "./component/addTodo";
import AddUser from "./component/usercomponent/addUser";
import UserList from "./component/usercomponent/userList";
function App() {
  return (
    <div className="App">
      {/* <TodoForm /> */}
      <AddTodo />
      <TodoList />

      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
