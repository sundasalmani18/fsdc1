import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams,useNavigate } from "react-router-dom";


export default function Update() {
 const {id} =useParams();
   console.log("id",id)
const users =useSelector((state)=>state.user)


const existingUser = users.filter(f => f.id == id);
  console.log(existingUser);

  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

 



    return (
        <>
           <div classNameName="container m-5">
            <div classNameName="col-md-10 justify-content-center">
                <div className="card">
                    <div className="card-header">
                       Update User
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">

                            <form >
                            <div className="form-group">
                                    <label for="exampleInputPassword1">Name</label>
                                    <input type="text" className="form-control" 
                                    id="exampleInputPassword1"
                                   name="name"
                                   value={uname}
                                //    onChange={(e) =>setName( e.target.value)}
                                     placeholder="Name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" 
                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                  name="email"
                                    // onChange={(e) =>setEmail( e.target.value)}
                                    value={uemail}
                                    placeholder="Enter email" />
                                   
                                </div>
                               
                                <button type="submit" className="btn btn-primary m-4">Update User</button>
                            </form>
                        </blockquote>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
} 