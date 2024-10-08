import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, json } from "react-router-dom";
import { updateUser } from "../feature/userSlice";
import axios from "axios";

export default function Update() {
  const { item_id } = useParams();
  console.log("id", item_id);
  const users = useSelector((state) => state.storeusers.user);
  console.log("users",users)

  const updateduser = users.filter((f) => f.id == item_id);
  console.log(updateduser, "existing userr");

//   const { name, email } = updateduser[0];
  const [name, setName] = useState(updateduser[0].name);
  const [email, setEmail] = useState(updateduser[0].email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/user/"+ item_id, { name, email })

      .then((res) => {
        dispatch(updateUser(res.data));
        localStorage.setItem("items", JSON.stringify(users));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div classNameName="container m-5">
        <div classNameName="col-md-10 justify-content-center">
          <div className="card">
            <div className="card-header">Update User</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <form onSubmit={handleUpdate}>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter email"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary m-4">
                    Update User
                  </button>
                </form>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//with redux
// export default function Update() {
//     const { item_id } = useParams();
//     console.log("id", item_id)
//     const users = useSelector((state) => state.storeusers.user)

//     const existingUser = users.filter(f => f.id == item_id);
//     console.log(existingUser, "existing userr");

//     const { name, email } = existingUser[0];
//     const [uname, setName] = useState(name);
//     const [uemail, setEmail] = useState(email);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleUpdate = (event) => {
//         event.preventDefault();
//         dispatch(updateUser({

//             id: item_id,
//             name: uname,
//             email: uemail,
//         }))
//         localStorage.setItem('users' ,JSON.stringify(users))

//         navigate("/")
//     }

//     return (
//         <>
//             <div classNameName="container m-5">
//                 <div classNameName="col-md-10 justify-content-center">
//                     <div className="card">
//                         <div className="card-header">
//                             Update User
//                         </div>
//                         <div className="card-body">
//                             <blockquote className="blockquote mb-0">

//                                 <form onSubmit={handleUpdate} >
//                                     <div className="form-group">
//                                         <label for="exampleInputPassword1">Name</label>
//                                         <input type="text" className="form-control"
//                                             id="exampleInputPassword1"
//                                             name="name"
//                                             value={uname}
//                                             onChange={(e) => setName(e.target.value)}
//                                             placeholder="Name" />
//                                     </div>

//                                     <div className="form-group">
//                                         <label for="exampleInputEmail1">Email address</label>
//                                         <input type="email" className="form-control"
//                                             id="exampleInputEmail1" aria-describedby="emailHelp"
//                                             name="email"
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             value={uemail}
//                                             placeholder="Enter email" />

//                                     </div>

//                                     <button type="submit" className="btn btn-primary m-4">Update User</button>
//                                 </form>
//                             </blockquote>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
