import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../feature/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";


//api 
export default function Create() {
    const navigate = useNavigate();
    const users = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formError, setFormError] = useState({})


    const validateForm = () => {
        let err = {}
        if (name === '') {
            err.name = <p style={{ color: "red" }}>name no is required!</p>
          }
    if (email === '') {
        err.email = <p style={{ color: "red" }}>Email required!</p>
      } else {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(email)) {
          err.email = <p style={{ color: "red" }}>Email not valid</p>
        }
    }
        
    setFormError({ ...err })

    return Object.keys(err).length < 1;

    }

    const createUser = (e) => {
        e.preventDefault();

        const isValid = validateForm()

        if (isValid) {


            axios.post("http://localhost:8080/user",{name,email})
            .then(res=>{
                dispatch(addUser(res.data))
                
                
                console.log(res)
                localStorage.setItem('items', JSON.stringify(users));
            navigate("/")
            })
            .catch(err=>console.log(err))


        // dispatch(addUser({ id: users[users.length - 1].id + 1, name: name, email: email }))
        
    }
    else{
        alert('All Fields Are required ')
    }
}

    
    return (
        <>
            <div className="container m-5">
                <div className="col-md-10 justify-content-center">
                    <div className="card m-5">
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
                                            onChange={(e) => setName(e.target.value)}

                                            placeholder="Name" />
                                            {formError.name}
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control"
                                            id="exampleInputEmail1" aria-describedby="emailHelp"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email" />
                                             {formError.email}
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


//with redux only
// export default function Create() {
//     const navigate = useNavigate();
//     const users = useSelector((state) => state.user)
//     const dispatch = useDispatch();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [formError, setFormError] = useState({})


//     const validateForm = () => {
//         let err = {}
//         if (name === '') {
//             err.name = <p style={{ color: "red" }}>name no is required!</p>
//           }
//     if (email === '') {
//         err.email = <p style={{ color: "red" }}>Email required!</p>
//       } else {
//         let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (!regex.test(email)) {
//           err.email = <p style={{ color: "red" }}>Email not valid</p>
//         }
//     }
        
//     setFormError({ ...err })

//     return Object.keys(err).length < 1;

//     }

//     const createUser = (e) => {
//         e.preventDefault();

//         const isValid = validateForm()

//         if (isValid) {

//         dispatch(addUser({ id: users[users.length - 1].id + 1, name: name, email: email }))
//         localStorage.setItem('items', JSON.stringify(users));
//         navigate("/")
//     }
//     else{
//         alert('All Fields Are required ')
//     }
// }

    
//     return (
//         <>
//             <div className="container m-5">
//                 <div className="col-md-10 justify-content-center">
//                     <div className="card m-5">
//                         <div className="card-header">
//                             Create New User
//                         </div>
//                         <div className="card-body">
//                             <blockquote className="blockquote mb-0">

//                                 <form onSubmit={createUser}>
//                                     <div className="form-group">
//                                         <label for="exampleInputPassword1">Name</label>
//                                         <input type="text" className="form-control"
//                                             id="exampleInputPassword1"
//                                             name="name"
//                                             onChange={(e) => setName(e.target.value)}

//                                             placeholder="Name" />
//                                             {formError.name}
//                                     </div>

//                                     <div className="form-group">
//                                         <label for="exampleInputEmail1">Email address</label>
//                                         <input type="email" className="form-control"
//                                             id="exampleInputEmail1" aria-describedby="emailHelp"
//                                             name="email"
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             placeholder="Enter email" />
//                                              {formError.email}
//                                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                                     </div>

//                                     <button type="submit" className="btn btn-primary m-4">Submit</button>
//                                 </form>
//                             </blockquote>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// } 