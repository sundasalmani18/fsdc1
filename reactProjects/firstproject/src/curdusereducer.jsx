import { useState } from "react";
import { useReducer, useRef } from "react";

export default function Curdusereducer() {

  // define initial state for user data
  const initialState = [
    {
      id: 1,
      name: 'ahmed',
      status: ' available',
      complete: false
    },
    {
      id: 2,
      name: 'umar',
      status: 'available',
      complete: false
    },
    {
      id: 3,
      name: 'ali',
      status: 'available',
      complete: false
    }

  ];

  // hum ny idhar reducer function kara hai jis sy hum crud apply kary gy
  const todosReducer = (state, action) => {
    // console.log("state", state, 'action', action)
    switch (action.type) {
      case 'ADD_TODO': {
        return (action.name.length)
          ? [...state, {
            id: state.length
              ? Math.max(...state.map(todo => todo.id)) + 1
              : 0,
            name: action.name,
            complete: false
          }]
          : state
      }

      case 'UPDATE_TODO': {
        console.log('UPDATE_TODO', action)
        return (action.name.length)
          ? state.map((item, i) =>
            item.id === action.id
              ? { ...item, name: action.name }
              : item
          )
          : state

        // const newArr = [...state];
        // newArr[action.id]["name"] = action.name
        // state = newArr
      }

      case 'DELETE_TODO': {
        return state.filter((x) => x.id !== action.id);
      }

      case 'TOGGLE_COMPLETE': {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, complete: !item.complete }
            : item
        )
      }

      default: {
        return state;
      }
    }
  }

  const inputRef = useRef();
  const updateInputRef = useRef();
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  const [isUpdateTodoStatus, setIsUpdateTodoStatus] = useState(false)
  // const [isUpdateTodoStatus, setIsUpdateTodoStatus] = useState(false)

  // const completedTodos = todos.filter(
  //   (todo) => { return todo.status }
  // );



  function addTodo(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      name: inputRef.current.value,
      complete: false
    });
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  }

  function toggleComplete(id) {
    dispatch({ type: 'TOGGLE_COMPLETE', id });
    console.log("hello");
  }

  function changeTodoStatus(data) {
    setIsUpdateTodoStatus(true)
    updateInputRef.current = data
    console.log(updateInputRef.current)
    // inputRef.current = data.name
    // dispatch({ type: 'UPDATE_TODO', id });
  }

  function deleteTodo(id) {
    dispatch({ type: 'DELETE_TODO', id });
  }

  function updateTodo(event, data) {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_TODO',
      id: data.id,
      name: inputRef.current.value,
      status: data.status,
      complete: data.complete
    });
    console.log(inputRef.current.value);
    inputRef.current.value = '';
    setIsUpdateTodoStatus(false)
  }

  console.log('todos', todos)
  return (
    <div className="todo-input">
      <form>
        {isUpdateTodoStatus ? (
          <>
            <input ref={inputRef} defaultValue={updateInputRef?.current?.name} type="text" id="update-todo" placeholder="Update Employee" />
            <button onClick={(e) => updateTodo(e, updateInputRef?.current)}> Update Employee</button>
          </>
        ) : (
          <>
            <input ref={inputRef} type="text" id="add-todo" placeholder="Add Employee" />
            <button onClick={addTodo}> ADD Employee</button>
          </>
          )}

      </form>


      {todos.map((todo) => (
        <div key={todo.id}>
          {/* <div className="todo-name" onClick={() => toggleComplete(todo.id)}> */}
          {todo.name}
          {/* </div> */}
          <div className="todo">
            <button onClick={() => changeTodoStatus(todo)}>Update</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}

    </div>
  );
}
