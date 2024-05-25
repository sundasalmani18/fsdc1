
import { useState } from "react"

export default function MixCode() {
    const [formData, setFormData] = useState({
        userid: '',
        email: '',
        phoneno: '',
        gender: '',
        phonebrand: '',
        skills: [],
      })


      const [formError, setFormError] = useState({})
    
      const onChangeHandler = (event) => {
    
        console.log(event)
        if (event.target.name === 'languages') {
    
          let copy = { ...formData }
    
          if (event.target.checked) {
            copy.languages.push(event.target.value)
          } else {
            copy.languages = copy.languages.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        } else {
          setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
          }))
        }
      }
    
      const validateForm = () => {
        let err = {}
    
        if (formData.username === '') {
          err.username = 'Username required!'
        }
        if (formData.email === '') {
          err.email = 'Email required!'
        } else {
          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          if (!regex.test(formData.email)) {
            err.email = 'Email not valid!'
          }
        }
    
        if (formData.phoneno === '' ) {
          err.password = 'phone no is required!'
        } 
    
        if (formData.phonebrand === '') {
          err.phonebrand = 'phone Brand required!'
        }
        if (formData.gender === '') {
          err.gender = 'Gender required!'
        }
        if (formData.skills.length < 1) {
          err.languages = 'Any one skill required!'
        }
    
        setFormError({ ...err })
    
        return Object.keys(err).length < 1;
      }
    
      const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log("Form Data:", formData)
        let isValid = validateForm()
    
        if (isValid) {
          alert('Submitted')
          //API call to server
        } else {
          alert('In-Valid Form')
        }
        console.log(isValid)
      }


return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User id</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.userid} />
          <span className='non-valid'>{formError.userid}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          <span className='non-valid'>{formError.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Phone no</label>
          <input className="form-control" name="password" onChange={onChangeHandler} value={formData.phoneno} />
          <span className='non-valid'>{formError.phoneno}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Phone Brand</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.phonebrand}>
            <option value=""></option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
          <span className='non-valid'>{formError.phonebrand}</span>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
            <span className='non-valid'>{formError.gender}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Skills</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.skills.indexOf('html') !== -1} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.skills.indexOf('css') !== -1} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.skills.indexOf('javascript') !== -1} />
              <label htmlFor="javascript">Javascript</label>
            </div>
          </div>
          <span className='non-valid'>{formError.languages}</span>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}