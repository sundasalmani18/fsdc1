import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../features/counter/counterSlice";

export default function Counter() {
    const count = useSelector(state => state.users.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}