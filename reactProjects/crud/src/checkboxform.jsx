import { useState,useRef } from "react";

export default function Checkboxform() {
  const [fruitsArray,setFruitsArray]=useState([]);

  const handleChange=(e)=>{
    const value =e.target.value;
    const checked =e.target.checked;
    console.log( value,checked);
    if(checked){
      setFruitsArray([
        ...fruitsArray,value
      ])
    }
    else{
      setFruitsArray(fruitsArray.filter((e)=>(e!==value)))
      
    }
  }

return(
  <form>
    <label> Select Fruits </label>
     <input className="form-check-input" type="checkbox" name="languages" value="Apple"onChange={handleChange} id="flexCheckDefault"/> 
    <label className="form-check-label" htmlFor="flexCheckDefault">  Apple  </label>
    <input className="form-check-input" type="checkbox" name="languages"   value="Mango" onChange={handleChange}  id="flexCheckDefault"/> 
 <label className="form-check-label" htmlFor="flexCheckDefault">  Mango  </label>
    <input className="form-check-input" type="checkbox" name="languages"  value="banana" onChange={handleChange} id="flexCheckDefault"/> 
    <label className="form-check-label" htmlFor="flexCheckDefault">  banana  </label>
    <h1>{fruitsArray}</h1>
  </form>


  //   const checkboxRefs = useRef([]);

  // // Function to handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   // Array to store checked checkboxes
  //   const checkedCheckboxes = checkboxRefs.current
  //     .filter(ref => ref.current.checked)
  //     .map(ref => ref.current.value);

  //   console.log("Checked checkboxes:", checkedCheckboxes);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     {/* Checkbox inputs */}
  //     <label>
  //       <input type="checkbox" value="option1" ref={el => checkboxRefs.current[0] = el} />
  //       Option 1
  //     </label>
  //     <label>
  //       <input type="checkbox" value="option2" ref={el => checkboxRefs.current[1] = el} />
  //       Option 2
  //     </label>
  //     <label>
  //       <input type="checkbox" value="option3" ref={el => checkboxRefs.current[2] = el} />
  //       Option 3
  //     </label>

  //     {/* Submit button */}
  //     <button type="submit">Submit</button>
  //   </form>
  
        // const [userinfo, setUserInfo] = useState({
        //     languages: [],
        //     response: [],
        // });
     
        // const handleChange = (e) => {
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
     
        //     // Case 2  : The user unchecks the box
        //     else {
        //         setUserInfo({
        //             languages: languages.filter(
        //                 (e) => e !== value
        //             ),
        //             response: languages.filter(
        //                 (e) => e !== value
        //             ),
        //         });
        //     }
        // };
     
        // return (
        //     <>
        //         <div className="container-fluid top ">
        //             <h1 className="text-success">
        //                 GeeksforGeeks
        //             </h1>
        //             <h3>
        //                 React Example for multiple checkbox
        //                 input
        //             </h3>
        //             <div className="container mt-5  pb-5 pt-5">
        //                 <h3 className="form-head-contact-h3 ">
        //                     Your programming expertise lies in
        //                     what languages?{" "}
        //                 </h3>
     
        //                 <form>
        //                     <div className="row">
        //                         <div className="col-md-6">
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="Javascript"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       Javascript
        //                                 </label>
        //                             </div>
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="Python"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       Python
        //                                 </label>
        //                             </div>
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="Java"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       Java
        //                                 </label>
        //                             </div>
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="PHP"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       PHP
        //                                 </label>
        //                             </div>
        //                         </div>
        //                         <div className="col-md-6">
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="C#"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       C#
        //                                 </label>
        //                             </div>
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="C++"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       C++
        //                                 </label>
        //                             </div>
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="C"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       C
        //                                 </label>
        //                             </div>
        //                             <div className="form-check m-3">
        //                                 <input
        //                                     className="form-check-input"
        //                                     type="checkbox"
        //                                     name="languages"
        //                                     value="Typescript"
        //                                     id="flexCheckDefault"
        //                                     onChange={
        //                                         handleChange
        //                                     }
        //                                 />
        //                                 <label
        //                                     className="form-check-label"
        //                                     htmlFor="flexCheckDefault"
        //                                 >
        //                                       Typescript
        //                                 </label>
        //                             </div>
        //                         </div>
        //                     </div>
     
        //                     <div className="form-control mt-3 mb-3 text-center">
        //                         <label htmlFor="exampleFormControlTextarea1">
        //                             You're proficient in the
        //                             following languages :{" "}
        //                         </label>
        //                         <textarea
        //                             className="form-control text"
        //                             name="response"
        //                             value={userinfo.response}
        //                             placeholder="The checkbox values will be displayed here "
        //                             id="floatingTextarea2"
        //                             style={{ height: "150px" }}
        //                             onChange={handleChange}
        //                         ></textarea>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </>
        );
    }

