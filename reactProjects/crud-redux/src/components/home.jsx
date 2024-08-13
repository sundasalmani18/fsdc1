import { useSelector } from "react-redux";


export default function Home(){
 const users =useSelector((state)=>state.user)
console.log("user",users)

    return(
        <>
        <div className ="container">
            <h2>Welcome To Crud App in Redux</h2><br/><br/>
            
        <table class="table table-dark">
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
      <td><button className="btn btn-secondary">Update</button></td>
      <td><button className="btn btn-danger">Delete</button></td>      
    </tr>
  ))}
  </tbody>
</table>


        </div>
        </>
    );
}