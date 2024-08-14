import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Home(){

  const naviagte =useNavigate()
 const users =useSelector((state)=>state.user)
console.log("user",users)

    return(
        <>
        <div className ="container">
            <h2>Welcome To Crud App in Redux</h2><br/><br/>
            <button onClick={()=>naviagte("/create")} className="btn btn-primary">Create</button>
            
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>      
    </tr>
  </thead>

  <tbody>
    {users.map((user,index)=>(
   
    <tr key={index}>
      <th scope="row">{user.id}</th>
      <td scope="row">{user.name}</td>
      <td scope="row">{user.email}</td>
      <td><button onClick ={()=>naviagte(`/update/${user.id}`)} className="btn btn-secondary">Update</button></td>
      <td><button className="btn btn-danger">Delete</button></td>      
    </tr>
  ))}
  </tbody>
</table>


        </div>
        </>
    );
}