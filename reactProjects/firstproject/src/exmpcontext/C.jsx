import { useContext } from "react";
import { UserContext } from './A';

export default function C() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component C</h1>
            <p>This is from component C {user.name}</p>
        </>
    );
}