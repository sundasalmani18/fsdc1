import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../feature/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { getUser } from "../feature/userSlice";

//with backend api and redux

export default function Home() {
  const dispatch = useDispatch();
  const naviagte=useNavigate()
  const users = useSelector((state) => state.storeusers.user);

  console.log(useSelector((state) => state.storeusers.user));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user");
        console.log(response)
        dispatch(getUser(response.data.Data.user));
      } catch (err) {
        console.log("err",err)
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <br /> <br />
        <h2>Welcome To Crud App in Redux</h2>
        <br />
        <div className="m-2">
          {/* <button
            onClick={() => naviagte("/create")}
            className="btn btn-primary"
          >
            Create
          </button> */}
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td scope="row">{user.name}</td>
                <td scope="row">{user.email}</td>
                <td>
                <button
                    onClick={() => naviagte(`/update/${user.id}`)}
                    className="btn btn-secondary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  {/* <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>  */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

//with redux only
// export default function Home() {

//   const naviagte = useNavigate()
//   const users = useSelector((state) => state.user)
//   console.log("user", users)
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteUser({ id: id }))
//   }
//   return (
//     <>
//       <div className="container">
//         <br/> <br/>
//         <h2>Welcome To Crud App in Redux</h2><br/>
//         <div className="m-2">
//         <button onClick={() => naviagte("/create")} className="btn btn-primary">Create</button>
//         </div>
//         <table className="table table-dark">
//           <thead>
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Update</th>
//               <th scope="col">Delete</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user, index) => (

//               <tr key={index}>
//                 <th scope="row">{user.id}</th>
//                 <td scope="row">{user.name}</td>
//                 <td scope="row">{user.email}</td>
//                 <td><button onClick={() => naviagte(`/update/${user.id}`)} className="btn btn-secondary">Update</button></td>
//                 <td><button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>
//     </>
//   );
// }
