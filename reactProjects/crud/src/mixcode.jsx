// import restData from './data/UserData.json';
// import { useState,useEffect } from "react"

// export default function MixCode() {

//   const userdata = restData.users;

//     const [formData, setFormData] = useState([

//       userid= "",
//       email= "",
//       phoneno= "", 
//       phonebrand= "", 
//       gender= "",
//        skill= [],
  
// ]);




//       const [formError, setFormError] = useState({})
    
//       const onChangeHandler = (event) => {
    
//         console.log(event)
//         if (event.target.name === 'languages') {
    
//           let copy = { ...formData }
    
//           if (event.target.checked) {
//             copy.skill.push(event.target.value)
//           } else {
//             copy.skill = copy.skill.filter(el => el !== event.target.value)
//           }
    
//           setFormData(copy)
    
//         } else {
//           setFormData(() => ({
//             ...formData,
//             [event.target.name]: event.target.value
//           }))
//         }
//       }
    
//       const validateForm = () => {
//         let err = {}
    
//         if (formData.userid === '') {
//           err.userid = <p style={{color:"red"}}>User Id required!</p>
//         }
//         if (formData.email === '') {
//           err.email = <p style={{color:"red"}}>Email required!</p>
//         } else {
//           let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//           if (!regex.test(formData.email)) {
//             err.email = <p style={{color:"red"}}>Email not valid</p>
//           }
//         }
    
//         if (formData.phoneno === '' ) {
//           err.phoneno = <p style={{color:"red"}}>phone no is required!</p>
//         } 
    
//         if (formData.phonebrand === '') {
//           err.phonebrand = <p style={{color:"red"}}>phone Brand required!</p> 
//         }
//         if (formData.gender === '') {
//           err.gender = <p style={{color:"red"}}>Gender required!</p>
//         }
//         if (formData.skill.length < 1) {
//           err.skill = <p style={{color:"red"}}>Any one skill required!</p> 
//         }
    
//         setFormError({ ...err })
    
//         return Object.keys(err).length < 1;
//       }
    
//       const onSubmitHandler = (event) => {
//         event.preventDefault()
//         console.log("Form Data:", formData)
//         let isValid = validateForm()
    
//         if (isValid) {

//           const dt = [...formData];
        
         
         
//           setFormData(dt)
//           console.log(dt);



//           alert('Submitted')
//           //API call to server
//         } else {
//           alert('In-Valid Form')
//         }
//         console.log(isValid)
//       }


// return (
//   <>
//     <div className="App">
//       <form onSubmit={onSubmitHandler}>
//         <div className="form-group">
//           <label htmlFor="username" className="form-label">User id</label>
//           <input className="form-control" name="userid" onChange={onChangeHandler} value={formData.userid} />
//           <span className='non-valid'>{formError.userid }</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
//           <span className='non-valid'>{formError.email}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password" className="form-label">Phone no</label>
//           <input className="form-control" name="phoneno" onChange={onChangeHandler} value={formData.phoneno} />
//           <span className='non-valid'>{formError.phoneno}</span>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="phonebrand" className="form-label">Phone Brand</label>
//           <select className="form-select" name="phonebrand" onChange={onChangeHandler} value={formData.phonebrand}>
//             <option value=""></option>
//             <option value="iphone">iphone</option>
//             <option value="samsung">samsung</option>
//             <option value="oppo">oppo</option>
//           </select>
//           <span className='non-valid'>{formError.phonebrand}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">Gender</label>
//           <div>
//             <div>
//               <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
//               <label htmlFor="male">Male</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
//               <label htmlFor="female">Female</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
//               <label htmlFor="other">Other</label>
//             </div>
//             <span className='non-valid'>{formError.gender}</span>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">Skills</label>
//           <div>
//             <div>
//               <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.skill.indexOf('html' ) !== -1} />
//               <label htmlFor="html">HTML</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.skill.indexOf('css' ) !== -1} />
//               <label htmlFor="css">CSS</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.skill.indexOf('javascript' ) !== -1} />
//               <label htmlFor="javascript">Javascript</label>
//             </div>
//           </div>
//           <span className='non-valid'>{formError.skill}</span>
//         </div>
//         <div className="form-group">
//           <button className="btn" type="submit" >Submit</button>
//         </div>
//       </form>
//       </div>

// <table class="table">
    
//     <thead>
//       <tr>
//         <td>S.no</td>
//         <td> user_id </td>
//         <td>email</td>
//         <td>Phone No</td>    
//         <td>Phone Brand</td>
//         <td>gender</td>
//         <td>skill</td>
//         <td>Update</td>
//         <td>Delete</td>

//       </tr>
//     </thead>


//     <tbody>
   
//       { formData.map((item, index) => {
//          <tr>
//         return (         
//           <td>{index}</td>
//           <td>{item.userid}</td>
//           <td>{item.email}</td>
//           <td>{item.phoneno}</td>
//           <td>{item.phonebrand}</td>
//           <td>{item.gender}</td>
//           <td>{item.skill}</td>  
//     );
//     </tr>
//   })
//   }

//           {/* <td><button class="btn btn-primary" onClick={() => handleEdit(item.user_id, index)}>Edit</button></td>
//           <td><button class="btn btn-danger" onClick={() => handleDelete(item.user_id)}>Delete</button></td> */}
       

     


//     </tbody>
//   </table>
// </>
//   );
// }