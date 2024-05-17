 import { useRef ,useState} from "react";
 import { useReducer } from "react";
 
 export default function Crud(){
  const [skillArray,setSkillArray]=useState([]);
  const updateInputRef = useRef();
  const emailRef = useRef();
  const phonenoRef = useRef();
  const brandRef = useRef();
  const skillRef = useRef();
  const genderRef = useRef();	
  const [isUpdateTodoStatus, setIsUpdateTodoStatus] = useState(false)
  const [emailError,setEmailError]=useState(false);
  const [phoneError,setPhoneError]=useState(false);
  const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    let email =e.target[0].value;
    if(!email.match(emailRegex)){
  setEmailError(true);
    }else{
      setEmailError(false);
    }
   }

  const handleEmail=(e)=>{
    let email =e.target.value;
    if(!email.match(emailRegex)){
 setEmailError(true);
    }else{
      setEmailError(false);
    }
  }
 const handlePhoneno=(e)=>{
  let phoneno=e.target.value;
  phoneno = phoneno.replace(/\D/g, '');

  if (phoneno.length < 5) {
    setPhoneError(true);
    return phoneno.replace(/(\d{1})(\d{1,3})/, '+$1 ($2');
  
}
else{
  setPhoneError(false);
}
}   



         const   users= [																			
                {																		
                id: "",																		
                email: "user1@gmail.com",																		
                phone: "2345678900",																		
                gender: "male",																		
                phone_brand: "samsung",																		
                skills: ["html","javascript"],																		
                picture: "#"																		
                },																		
                {																		
                id: "1002",																		
                email: "user2@gmail.com",																		
                phone: "2345678901",																		
                gender: "female",																		
                phone_brand: "iphone",																		
                skills: ["javascript"]	,																	
                picture: "#",																		
                },																		
            ]																			
            // phoneBrands: [																			
            //     {																		
            //     brand_id: "2001",																		
            //     brand: "IPHONE",																		
            //     value: "IPHONE",																		
            //     },																		
            //     {																		
            //     brand_id: "2002",																		
            //     brand: "SUMSUNG",																		
            //     value: "SUMSUNG",																		
            //     },																		
            //     {																		
            //     brand_id: "2003",																		
            //     brand: "GOOGLE PHONE",																		
            //     value: "GOOGLE_PHONE",																		
            //     },																		
            // ],																			
            // skills: [																			
            //     {																		
            //     skill_id: "3001",																		
            //     skill: "HTML",																		
            //     value: "HTML",																		
            //     },																		
            //     {																		
            //     skill_id: "3002",																		
            //     skill: "CSS",																		
            //     value: "CSS",																		
            //     },																		
            //     {																		
            //     skill_id: "3003",																		
            //     skill: "JAVASCRIPT",																		
            //     value: "JAVASCRIPT",																	
            //     },																		
            // ],																			
            																			
        	



    // const initialState = [
    //     {
    //       id: 1,
    //       name: 'ahmed',
    //       status: ' available',
    //       complete: false
    //     },
    //     {
    //       id: 2,
    //       name: 'umar',
    //       status: 'available',
    //       complete: false
    //     },
    //     {
    //       id: 3,
    //       name: 'ali',
    //       status: 'available',
    //       complete: false
    //     }
    
    //   ];
 
//     const [userinfo, setUserInfo] = useState({
//       languages: [],
//       response: [],
//   });
//   const handleChange = (e) => {
//     // Destructuring
//     const { value, checked } = e.target;
//     const { languages } = userinfo;

//     console.log(`${value} is ${checked}`);

//     // Case 1 : The user checks the box
//     if (checked) {
//         setUserInfo({
//             languages: [...languages, value],
//             response: [...languages, value],
//         });
//     }
//     else {
//       setUserInfo({
//           languages: languages.filter(
//               (e) => e !== value
//           ),
//           response: languages.filter(
//               (e) => e !== value
//           ),
//       });
//   }
// };




 const todosReducer = (state, action) => {
    // console.log("state", state, 'action', action)
    switch (action.type) {
      case 'ADD_TODO': {
        return (action.email.length)
          ? [...state, {
            id: state.length
              ? Math.max(...state.map(todo => todo.id)) + 1
              : 0,
            email: action.email,
            phone: action.phone,
            phone_brand: action.phone_brand,
            skills: action.skills,
            gender: action.gender,

            complete: false
          }]
          : state
      }
      case 'UPDATE_TODO': {
        console.log('UPDATE_TODO', action)
        return (action.email.length)
          ? state.map((item, i) =>
            item.id === action.id
              ? { ...item, name: action.name }
              : item
          )
          : state
        }
        case 'DELETE_TODO': {
          return state.filter((x) => x.id !== action.id);
        }
        default: {
          return state;
        }
    }
}


const [todos, dispatch] = useReducer(todosReducer, users);

function addTodo(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      email: emailRef.current.value,
      phone:phonenoRef.current.value,
       phone_brand :brandRef.current.value,
      skills:skillRef.current.value,
      gender:genderRef.current.value,
      complete: false
    });
    console.log(emailRef.current.value);
    console.log(brandRef.current.checked);
    console.log(skillRef.current.value);
    emailRef.current.value = '';
  }
  console.log('todos', todos);

  function deleteTodo(id) {
    dispatch({ type: 'DELETE_TODO', id });
  }
  function changeTodoStatus(data) {
    setIsUpdateTodoStatus(true)
    updateInputRef.current = data
    console.log(updateInputRef.current)
    // inputRef.current = data.name
    // dispatch({ type: 'UPDATE_TODO', id });
  }
  function updateTodo(event, data) {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_TODO',
      id: data.id,
      email: emailRef.current.value,
      phone:phonenoRef.current.value,
      phonebrand:brandRef.current.checked,
      skill:skillRef.current.checked,
      gender:genderRef.current.value,
      status: data.status,
      complete: data.complete
    });
    console.log(emailRef.current.value);
    emailRef.current.value = '';
    setIsUpdateTodoStatus(false)
  }

return (
       
    <div>
      <form onSubmit={handleSubmit}>

      {isUpdateTodoStatus ? (
          <>
            <input ref={emailRef} defaultValue={updateInputRef?.current?.email} type="text" id="update-todo" placeholder="Update Employee" />
            <input ref={phonenoRef} defaultValue={updateInputRef?.current?.phone} type="text" id="update-todo" placeholder="Update Employee" />
            <select name="select brand" defaultValue="samsung">
        <option ref={brandRef}  value="iphone"defaultValue={updateInputRef?.current?.phonebrand} >iphone </option>
        <option ref={brandRef} value="samsung" defaultValue={updateInputRef?.current?.phonebrand}>samsung</option>
        <option ref={brandRef}  value="oppo" defaultValue={updateInputRef?.current?.phonebrand}>oppo</option>
      </select>


   <input className="form-check-input" type="checkbox" name="languages"  ref={skillRef} defaultValue={updateInputRef?.current?.skill} value="Javascript" id="flexCheckDefault"/> 
 <label className="form-check-label" htmlFor="flexCheckDefault">  Javascript  </label>
<input className="form-check-input" type="checkbox" name="languages" ref={skillRef} defaultValue={updateInputRef?.current?.skill} value="Css" id="flexCheckDefault"/> 
 <label className="form-check-label" htmlFor="flexCheckDefault">  Css  </label>
 <input className="form-check-input" type="checkbox" name="languages"  ref={skillRef} defaultValue={updateInputRef?.current?.skill} value="Html" id="flexCheckDefault"/> 
 <label className="form-check-label" htmlFor="flexCheckDefault">  Html  </label>
  <br></br>
    <input type="radio" value="Male" name="gender" ref={genderRef}  defaultValue={updateInputRef?.current?.gender}/> Male
  <input type="radio" value="Female" name="gender" ref={genderRef} defaultValue={updateInputRef?.current?.gender}/> Female
   <button onClick={(e) => updateTodo(e, updateInputRef?.current)}> Update Employee</button>
          </>
        ) : (
<>
    <input ref={emailRef} type="email" id="add-todo" placeholder="Email" onChange={handleEmail} /><br></br><br></br><br></br>
    {emailError ? <span style ={{color:"red"}}>Invalid Email</span>:""}
    <input ref={phonenoRef} type="number" id="add-todo" placeholder="Add Phone no"  onChange={handlePhoneno}/><br></br>
 {phoneError ? <span>Invalid number</span> : ""}
    <select name="select brand" defaultValue="samsung">
        <option ref={brandRef} value="iphone">iphone</option>
        <option ref={brandRef} value="samsung">samsung</option>
        <option ref={brandRef}  value="oppo">oppo</option>
      </select><br></br>
      

         <input className="form-check-input" type="checkbox" name="languages" 
                    
        ref={skillRef}
          value="Javascript" id="flexCheckDefault"/> 
          <label className="form-check-label" htmlFor="flexCheckDefault">  Javascript  </label>
          <input className="form-check-input" type="checkbox" name="languages"  
                                             
                                          ref={skillRef}
                                      
          value="Javascript" id="flexCheckDefault"/> 
          <label className="form-check-label" htmlFor="flexCheckDefault">  Css  </label>
          <input className="form-check-input" type="checkbox" name="languages"  ref={skillRef} 
        
          value="Javascript" id="flexCheckDefault"/> 
          <label className="form-check-label" htmlFor="flexCheckDefault">  Html  </label>
          <br></br>
          
          <input type="radio" value="Male" name="gender" ref={genderRef} /> Male
         <input type="radio" value="Female" name="gender" ref={genderRef}/> Female
         <br></br>

            <button onClick={addTodo}> ADD Employee</button>
            </>
             )}
            </form>
 


    <table class="table table-dark">
         <thead>
          <tr>
           <td>S.No</td>
           <td>Email </td>
           <td>Phone No</td>
            <td>Brand</td>
            <td>Skills</td>
            <td>Gender</td>
            <td>Action </td>
      <td></td>
     </tr>
       </thead>
<tbody>
    {todos.map((todo,index) => (
        <tr key={todo.id}>
          {/* <div className="todo-name" onClick={() => toggleComplete(todo.id)}> */}
          <td>{index+1}</td>
         <td> {todo.email}</td>
       <td> {todo.phone}</td>  
       <td>  {todo.phone_brand}</td> 
        <td>{todo.skills}</td>  
         <td>{todo.gender}</td> 
         <button onClick={() => changeTodoStatus(todo)}>Update</button>
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </tr>

        ))}

        //   {/* </div> */}
        // //   {/* <div className="todo">
        // //     <button onClick={() => changeTodoStatus(todo)}>Update</button>
        //     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        // //   </div> */}
           
       
        
    
    </tbody>
    </table>


    
  </div>
  
);


  


 }