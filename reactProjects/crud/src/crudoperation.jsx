
import restData from './data/UserData.json';
import { useEffect, useState } from 'react';
export default function CrudOperation() {


    const userdata = restData.users;
    const [data, setData] = useState([userdata]);
    const [user_id, setUser_id] = useState();
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [phonebrand, setPhoneBrand] = useState('');
    const [gender, setGender] = useState("");
    const [skill, setSkill] = useState('');
    const [skillArray, setSkillArray] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [emailerror, setEmailError] = useState(false);
    const [phoneerror, setPhoneError] = useState(false);
    const [gendererror, setGenderError] = useState(false);
    const [phonebranderror, setPhoneBrandError] = useState(false);
    const [skillerror, setSkillError] = useState(false);



    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




useEffect(() => {
    setData(userdata);
}, []);


let handleAdd = (e) => {
    e.preventDefault();


    const email = e.target[0].value;
    if (!regex.test(email)) {
      setEmailError(true);
    }
    else {
      setEmail(email);
      setEmailError(false);
    }
    const phoneno = e.target[1].value;
    if (phoneno === "") {
      setPhoneError(true);
    }
    else {

      setPhoneError(false);
    }
    const gender = e.target[2].value;
    if (gender === "") {
      setGenderError(true);
    }
    else {
      setGender(false);
    }

    const phonebrand = e.target[5].value;
    console.log(phonebrand+"phonebrand")
    if (phonebrand ==="" ) {
      setPhoneBrandError(true);
    }
    else {

      setPhoneBrandError(false);
    }
    const skill = e.target[5].value;
    if (skill === null) {
      setSkillError(true);
    }
    else {

      setSkill(false);
    }
    if ((regex.test(email)) && phoneno !== ""  && gender !== "" && phonebrand !== "" && skill !== "") {


      const dt = [...data];
      const newObject = {
        user_id: user_id,
        email: email,
        phone: phoneno,
        gender: gender,
        skill: skill,
        phone_brand: phonebrand

      }
      dt.push(newObject);
      console.log(newObject);
      setData(dt)
      console.log(dt);
      handleClear();
    }
}
    const handleDelete = (id) => {
        if (id > 0) {
          if (window.confirm("are you sure to delete item")) {
            const dt = data.filter(item => item.user_id !== id);
            setData(dt);
          }
        }
        alert(id);
      }

      let handleClear = () => {
        setUser_id('');
        setEmail('');
        setPhoneno('');
        setGender("");
        setPhoneBrand('');
        setSkill('');
        setIsUpdate(false);
      }    

      const handleEdit = (user_id, index) => {
        const dt = data.filter(item => item.id = user_id)
        if (dt !== undefined) {
          setIsUpdate(true);
          setUser_id(user_id);
          setEmail(dt[index].email);
          setPhoneno(dt[index].phone);
          setGender(dt[index].gender);
          console.log(dt[index].gender + "gender")
          setPhoneBrand(dt[index].phonebrand);
          console.log(dt[index].phone_brand + "phone_brand")
          setSkill(dt[index].skill);
          console.log(dt[index].skill + "skill")
        }
      }



      
  const handleUpdate = (e) => {
    e.preventDefault();
    const index = data.map((item) => {
      return item.user_id
    }).indexOf(user_id);

    const dt = [...data];
    dt[index].user_id = user_id;
    dt[index].email = email;
    dt[index].phone = phoneno;
    dt[index].gender = gender;
    dt[index].phone_brand = phonebrand;
    dt[index].skill = skill;

    setData(dt);
    handleClear();
  }



      const handleSkill = (e) => {

        const value = (e.target.value);
        const checked = e.target.checked;
        console.log(checked);
        setSkill(e.target.value);
        console.log("hello " + value, checked);
        if (checked) {
          setSkillArray([
            ...skillArray, value
          ])
    
        }
        else {
          setSkillArray(skillArray.filter((e) => (e !== value)))
    
        }
      }


      const handleEmail = (e) => {
        const email = e.target.value;
    
        if (!regex.test(email)) {
          setEmailError(true);
        }
        else {
          setEmail(email);
          setEmailError(false);
        }
        setEmail(email);
      }

      const handlePhoneBrand=(e)=>{
        const phonebrand =e.target.value;
        setPhoneBrand(phonebrand);
      }
  const handleRadiobutton=(e)=> {
   
    // const target = e.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const gender = target.gender;
    setGender(e.target.value); 
  }
      return (

        <>
          <div className="justify-content-center" style={{ display: "flex", justifyContent: "center" }}>
    
    
            <form onSubmit={handleAdd}>
              <h1 className="p-4 text-center"> WELCOME TO CRUD APPLICATION</h1>
              <div className="col-md-6 text-center m-4">
                <div className=" align-items-center">
                  <input type="number" class="form-control m-2" placeholder="user_id" onChange={(e) => setUser_id(e.target.value)} value={user_id} />
                  <input type="text" class="form-control m-2" placeholder="email" onChange={handleEmail} value={email} />
                  {emailerror ? <p style={{ color: "red" }}>Invalid Email</p> : ""}
                  {/* { email.validationError && <span>{email.validationError}</span>}
                  {error.email}  <p style={{color:"red"}}></p> */}
                  <br /><br />
                  <input type="number" class="form-control m-2" placeholder="phone no " onChange={(e) => setPhoneno(e.target.value)} value={phoneno} />
                  {phoneerror ? <p style={{ color: "red" }}>Required</p> : ""}
    
    
                  <input type="radio" name="gender" value="female" onChange={handleRadiobutton}  /> Female
                  <input type="radio" name="gender" value="male" onChange={handleRadiobutton} 
                  /> Male
    
                  {gendererror ? <p style={{ color: "red" }}>Required</p> : ""}
                  <br />
                  <br />
                  {/* <h1>{gender}</h1> */}
    
    
                  <select name="select brand" value={phonebrand} onChange={handlePhoneBrand} >
                    <option value="iphone" type="" >iphone </option>
                    <option value="samsung" >samsung</option>
                    <option value="oppo"  >oppo</option>
                  </select>
                  {phonebranderror ? <p style={{ color: "red" }}>Required</p> : ""}
    
                  <br />
                  <label> Select Skills </label><br />
                  <input className="form-check-input" type="checkbox" name="languages" onChange={handleSkill} value="html" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">  html  </label>
                  <input className="form-check-input" type="checkbox" name="languages" value="Javascript" onChange={handleSkill} id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">  javascript  </label>
                  <input className="form-check-input" type="checkbox" name="languages" value="css" onChange={handleSkill} id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">  css  </label><br />
                  {skillerror ? <p style={{ color: "red" }}>Required</p> : ""}
    
                </div>
    
    
            
    
                {!isUpdate ?
                  <button class="btn btn-secondary m-2" >Add</button>
                  :
                  <button class="btn btn-secondary m-2" onClick={handleUpdate}>Update</button>
    
                }
    
              </div>
            </form>
    
    
    
    
          </div>
    
          <button class="btn btn-secondary" onClick={handleClear}>Clear</button>
    
    
    
    
          <table class="table">
    
            <thead>
              <tr>
                <td>S.no</td>
                <td> user_id </td>
                <td>email</td>
                <td>Phone No</td>
                <td>gender</td>
                <td>Phone Brand</td>
                <td>skill</td>
                <td>Update</td>
                <td>Delete</td>
    
              </tr>
            </thead>
    
    
            <tbody>
    
              {data.map((item, index) => {
                return (<tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.user_id}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone_brand}</td>
                  <td>{item.skill}</td>
    
    
                  <td><button class="btn btn-primary" onClick={() => handleEdit(item.user_id, index)}>Edit</button></td>
                  <td><button class="btn btn-danger" onClick={() => handleDelete(item.user_id)}>Delete</button></td>
                </tr>
    
                );
              })
              }
    
            </tbody>
          </table>
        </>
      );
    }