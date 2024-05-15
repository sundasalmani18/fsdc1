// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import restData from './data/UserData.json';



function App() {
  const userdata = restData.users;
  // console.log({ userdata })

 const [data ,setData]=useState([userdata]);
 const [email,setEmail]=useState('');
 const [gender,setGender]=useState('');

 useEffect(()=>{
  setData(userdata);
 },[]);


//  const handleEdit =(id)=>{
//   alert(id);
//  }
//  const handleDelete =(id)=>{
// alert(id);
//  }

let handleAdd=(e)=>{
  e.preventDefault();
  const dt=[...data];
  const newObject={
    email:email,
    gender:gender
  }
 
  dt.push(newObject);
  console.log(newObject);
  setData(dt)
  console.log(dt);
}

 const handleClear=()=>{
 setEmail("");
 setGender("");
 }
  return (
  <>



<form>
  {/* <div class="row"> */}
  <h1 class="p-4 text-center"> WELCOME TO CRUD APPLICATION</h1>
    <div class="col-md-2 text-center m-4">
    <div class =" align-items-center">
    <input type="text" class="form-control m-2" placeholder="email" onChange={(e)=>setEmail(e.target.value)}value={email}/>
      <input type="text" class="form-control m-2" placeholder="gender"onChange={(e)=>setGender(e.target.value)} value={gender}/>
      <button class ="btn btn-secondary m-2" onClick={handleAdd}>Add</button>
      <button class ="btn btn-secondary" onClick={handleClear}>Clear</button>

    </div>
     
    
    </div>
  {/* </div> */}
</form>
   

    {/* <h1 class="p-4 text-center"> WELCOME TO CRUD APPLICATION</h1> */}
    <table class="table table-dark">
    
    <thead>
     <tr>
       <td>S.No</td>
       <td>user_id </td>
       <td>email</td>
       <td>gender</td>
       <td>Update</td>
       <td>Delete</td>
 
     </tr>
    </thead>
 
  
    <tbody>
         {data.map((item,index) => {
           return( <tr key ={index}>
            <td>{index+1}</td> 
             <td>{item.user_id}</td>
              <td>{item.email}</td>
            <td>{item.gender}</td>
            {/* <td><button class ="btn btn-primary" onClick={()=>handleEdit(item.user_id)}>Edit</button></td> */}
            {/* <td><button class ="btn btn-danger" onClick={()=>handleDelete(item.user_id)}>Delete</button></td> */}
              </tr>
              
             );
           
            
       
         })
       }
    </tbody>
         </table>
  
        </>
   );        
   

   

}

export default App;
