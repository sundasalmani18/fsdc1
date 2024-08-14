import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../feature/userSlice";


export default function Create() {
        const users =useSelector((state)=>state.user)
    const dispatch =useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();



    const createUser = (e) => {
        e.preventDefault();
        dispatch(addUser({ id:users[users.length-1].id+1, name: name, email: email }))
      
    }

    return (
        <>
            <div className="container m-5">
                <div className="col-md-10 justify-content-center">
                    <div class="card">
                        <div class="card-header">
                            Create New User
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">

                                <form onSubmit={createUser}>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Name</label>
                                        <input type="text" class="form-control"
                                            id="exampleInputPassword1"
                                            name="name"
                                            onChange={(e) =>setName( e.target.value)}
                                            
                                            placeholder="Name" />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control"
                                            id="exampleInputEmail1" aria-describedby="emailHelp"
                                            name="email"
                                            onChange={(e) =>setEmail( e.target.value)}
                                            placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <button type="submit" class="btn btn-primary m-4">Submit</button>
                                </form>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 