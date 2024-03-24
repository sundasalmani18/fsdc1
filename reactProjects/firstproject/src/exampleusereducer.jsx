import { useReducer } from "react";


export default function Exampleusereducer() {
    const initialTodos = [
        {
            id: 1,
            title: "Todo 1",
            complete: false,
        },
        {
            id: 2,
            title: "Todo 2",
            complete: true,
        },
    ];

    const reducerFunc = (state, action) => {
        console.log('state', state, 'action', action)
        switch (action.type) {
            case "COMPLETE":
                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: !todo.complete };
                    } else {
                        return todo;
                    }
                });
            default:
                return state;
        }
    };

    const [todosValues, dispatch] = useReducer(reducerFunc, initialTodos);

    const handleComplete = (id) => {
        dispatch({ type: "COMPLETE", id: id });
    };

    return (
        <>
            {console.log('todos', todosValues)}
            {todosValues?.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo.id)}
                        // defaultChecked={todo.complete}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}