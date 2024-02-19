import { Component, useState } from "react";
import { todayDate } from "./utils";

export  class NotFound extends Component {
    render() {
        return (
            <h1>Page Not Found!</h1>
        )
    }
}


export class NotFoundUser extends Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() {
        return (
            <h1>{this.state.color} Page Not User! {todayDate().toString()}</h1>
        )
    }
}


export default function NotFoundComponent() {
    const [name,setName] = useState('red')
    let date = todayDate()
    return <h1>{name} Page Not Component {date.toString()}</h1>
}