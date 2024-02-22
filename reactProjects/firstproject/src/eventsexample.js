import { Fragment } from "react";

export function Calculator({
    status = false
}) {
    let add = (a, b) => {
        alert("Addition is " + (a + b));
    }
    let sub = (a, b) => {
        alert("subtract is " + (a - b));
    }

    if (status === true) {
        return (
            <button onClick={() => sub(3, 4)}>Perform subtration here</button>
        )
    }


    return (

        // <div>
        //     <button onClick={() => sub(3, 4)}>Perform subtration here</button>
        //     <button onClick={() => add(3, 4)}>Perform adding here</button>
        // </div>

        // <Fragment>
        //     <button onClick={() => sub(3, 4)}>Perform subtration here</button>
        //     <button onClick={() => add(3, 4)}>Perform adding here</button>
        // </Fragment>
        <>
            <button onClick={() => sub(3, 4)}>Perform subtration here</button>
            <button onClick={() => add(3, 4)}>Perform adding here</button>
        </>
    );

}