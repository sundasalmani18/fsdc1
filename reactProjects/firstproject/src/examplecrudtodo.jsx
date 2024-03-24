import { useReducer,useEffect,useRef } from "react";
export default function Todo () {
 const initialState = [
    { 
      id: 1, 
      name: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor dolar bilz pease, consectetur adipiscing elit.', 
      complete: false 
    },
    { 
      id: 2, 
      name: 'Lorem ipsum dolor sit amet, adipiscing elit consectetur nostrud exercitation ullamco.', 
      complete: false 
    },
    { 
      id: 3, 
      name: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ', 
      complete: false 
      },
    { 
      id: 4, 
      name: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Sed do eiusmod tempor Ut labore sit amet. Consectetur adipiscing lit as fuh.', 
      complete: false 
    },
    { 
      id: 5, 
      name: 'Ut labore Consectetur adipiscing elit, empor incididunt Ut quis sed do eiusmod tempor incididunt ', 
      complete: false 
    }
  ];


 
// const initialState = [...constants.TODOS];
const todosReducer = (state, action) => {
  console.log("state" ,state, 'action' ,action)
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
    case 'TOGGLE_COMPLETE': {
      return state.map((item) =>
        item.id === action.id
          ? { ...item, complete: !item.complete }
          : item
      )
    }
    // 03: add case for deleteComplete
    case 'DELETE_TODO': {
      return state.filter((x) => x.id !== action.id);
    }
    default: {
      return state;
    }
  }
}


  const inputRef = useRef();
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  const completedTodos = todos.filter(
    (todo) => { return todo.complete }
  );

  useEffect(() => {
    document.title = `You have ${completedTodos.length} items completed!`;
  })

  function addTodo(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      name: inputRef.current.value,
      complete: false
    });
    console.log( inputRef.current.value );
    inputRef.current.value = '';
  }
  function toggleComplete(id) {
    dispatch({ type: 'TOGGLE_COMPLETE', id });
    console.log("hello");
  }
  function deleteTodo(id) {
    dispatch({ type: 'DELETE_TODO', id });
  } // 02: add dispatch function for deleteTodo

  return (
    <>
      <div className="todo-input">
        <form onSubmit={addTodo}>
          <input ref={inputRef} type="search" id="add-todo" placeholder="Add Todo..." />
        </form>
      </div>
      <div className="column-container">
        {todos.map((todo) => (
          <div
            className={`column-item ${todo.complete ? 'completed' : null}`}
            key={todo.id}
          >
            <div className="flex-container">
              <div className="todo-name" onClick={() => toggleComplete(todo.id)}>
                {todo.name}
              </div>
              {/* 01: Add onClick call to deleteTodo */}
              <div className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                &times;
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>
        CLEAR TODOS
      </button>
    </>
  );
}