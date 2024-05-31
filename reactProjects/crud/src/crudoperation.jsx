
import restData from './data/UserData.json';
import { useEffect, useState } from 'react';
export default function CrudOperation() {


  const userdata = restData.users;
  const [data, setData] = useState([userdata]);
  const [user_id, setUser_id] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [phonebrand, setPhoneBrand] = useState('');
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [formError, setFormError] = useState({})



  // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




  useEffect(() => {
    setData(userdata);
  }, []);




  const validateForm = () => {
    let err = {}

    if (user_id === '') {
      err.user_id = <p style={{ color: "red" }}>User Id required!</p>
    }
    if (email === '') {
      err.email = <p style={{ color: "red" }}>Email required!</p>
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        err.email = <p style={{ color: "red" }}>Email not valid</p>
      }
    }

    if (phoneno === '') {
      err.phoneno = <p style={{ color: "red" }}>phone no is required!</p>
    }
    else {
      if (phoneno.length < 11) {
        err.phoneno = <p style={{ color: "red" }}>Phone no should  11 digits!</p>
      }
    }

    if (phonebrand === '') {
      err.phonebrand = <p style={{ color: "red" }}>phone Brand required!</p>
    }
    if (gender === '') {
      err.gender = <p style={{ color: "red" }}>Gender required!</p>
    }
    if (skill.length < 1) {
      err.skill = <p style={{ color: "red" }}>Any one skill required!</p>
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1;
  }


  const handleAdd = (e) => {
    e.preventDefault();

    const isValid = validateForm()

    if (isValid) {


      const dt = [...data];
      const newObject = {
        user_id: user_id,
        email: email,
        phone: phoneno,
        gender: gender,
        skill: skill,
        phonebrand: phonebrand

      }
      dt.push(newObject);
      console.log(newObject);
      setData(dt)
      console.log(dt);
      handleClear();
      alert('Submitted')
    }
    else {
      alert('All Fields Are required ')
    }
  }

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are You Sure to delete this item")) {
        const dt = data.filter(item => item.user_id !== id);
        setData(dt);
      }
    }
    alert("User id" + id + "has been deleted");
  }

  const handleClear = () => {
    setUser_id('');
    setEmail('');
    setPhoneno('');
    setGender('');
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
      console.log(dt[index].phonebrand + "phone_brand")
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
    dt[index].phonebrand = phonebrand;
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
      setSkill([
        ...skill, value
      ])
      console.log(skill + "skill")
    }
    else {
      setSkill(skill.filter((e) => (e !== value)))
    }
    // console.log(skill)
  }



  return (

    <>
      <div className="justify-content-center" style={{ display: "flex", justifyContent: "center" }}>


        <form onSubmit={handleAdd}>
          <h1 className="p-4 text-center"> WELCOME TO CRUD APPLICATION</h1>
          <div className="col-md-6 text-center m-4">
            <div className=" align-items-center">
              <input type="number" class="form-control m-2" placeholder="user_id" onChange={(e) => setUser_id(e.target.value)} value={user_id} />
              {formError.user_id}   <br /><br />
              <input type="text" class="form-control m-2" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {formError.email}
              {/* { email.validationError && <span>{email.validationError}</span>}
                  {error.email}  <p style={{color:"red"}}></p> */}
              <br /><br />
              <input type="number" class="form-control m-2" placeholder="phone no " onChange={(e) => setPhoneno(e.target.value)} value={phoneno} />
              {formError.phoneno}
              <br />
              <br />

              <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} checked={gender === 'female'} /> Female
              <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === 'male'}
              /> Male

              {formError.gender}
              <br />
              <br />
              {/* <h1>{gender}</h1> */}


              <select name="select brand" value={phonebrand} onChange={(e) => setPhoneBrand(e.target.value)} >
                <option value="" type="" > </option>
                <option value="iphone" type="" >iphone </option>
                <option value="samsung" >samsung</option>
                <option value="oppo"  >oppo</option>
              </select>
              {formError.phonebrand}

              <br />
              <label> Select Skills </label><br />
              <input className="form-check-input" type="checkbox" name="languages" onChange={handleSkill} value="html" id="flexCheckDefault" checked={skill.indexOf('html') !== -1} />
              <label className="form-check-label" htmlFor="flexCheckDefault">  html  </label>
              <input className="form-check-input" type="checkbox" name="languages" value="javascript" onChange={handleSkill} id="flexCheckDefault" checked={skill.indexOf('javascript') !== -1} />
              <label className="form-check-label" htmlFor="flexCheckDefault">  javascript  </label>
              <input className="form-check-input" type="checkbox" name="languages" value="css" onChange={handleSkill} id="flexCheckDefault" checked={skill.indexOf('css') !== -1} />
              <label className="form-check-label" htmlFor="flexCheckDefault">  css  </label><br />
              {formError.skill}
            </div>
            {!isUpdate ?
              <button class="btn btn-success m-2" >Add</button>
              :
              <button class="btn btn-success m-2" onClick={handleUpdate}>Update</button>
            }
          </div>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button class="btn btn-primary" onClick={handleClear}>Clear</button>
      </div>





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
              <td>{item.phonebrand}</td>
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