import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../feature/userSlice";
import { useNavigate } from "react-router-dom";


export default function Create() {
    const navigate =useNavigate(); 
     const users =useSelector((state)=>state.user)
    const dispatch =useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();



    const createUser = (e) => {
        e.preventDefault();
        dispatch(addUser({ id:users[users.length-1].id+1, name: name, email: email }))
      navigate("/")
    }

    return (
        <>
            <div classNameName="container m-5">
                <div classNameName="col-md-10 justify-content-center">
                    <div className="card">
                        <div className="card-header">
                            Create New User
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">

                                <form onSubmit={createUser}>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Name</label>
                                        <input type="text" className="form-control"
                                            id="exampleInputPassword1"
                                            name="name"
                                            onChange={(e) =>setName( e.target.value)}
                                            
                                            placeholder="Name" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control"
                                            id="exampleInputEmail1" aria-describedby="emailHelp"
                                            name="email"
                                            onChange={(e) =>setEmail( e.target.value)}
                                            placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <button type="submit" className="btn btn-primary m-4">Submit</button>
                                </form>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 