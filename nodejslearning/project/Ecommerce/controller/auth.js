import { db } from '../dbCon.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register= (req ,res)=>{
 // existing user check 
 const q = "SELECT * FROM users where email = ?"

 db.query(q, [req.body.email], (err, data) => {
     if (err) return res.status(500).json(err);
     if (data.length) return  res.status(409).json("user already exits");

     // pasword convert to hash bcryp
     
     const salt =  bcrypt.genSaltSync(10)
     const hashPass =  bcrypt.hashSync(req.body.password, salt)

     const query2 = "INSERT INTO users (name,email,password,phone,address) VALUES (?)"; // dynamic query

     const bodyData = [
         req.body.name,
         req.body.email,
         req.body.phone,
         req.body.address,
         hashPass,
     ]

     db.query(query2, [bodyData], (err, data) => {
         if (err) return res.status(500).send(err)

         let responseData = {
             result: true,
             user: bodyData,
             msg: "user created"
         }
         return res.status(200).json({ Data: responseData })
     })

 })

}

export const login=(req ,res)=>{
const email = req.body.email;


const q ="SELECT * FROM users where email = ?";

db.query(q,[email],(err,data)=>{

  if (err) return res.status(500).json(err);
  if(data.length === 0) return res.status(404).json("email not found");
  

  
    const isPasswordCorrect= bcrypt.compareSync(
       req.body.password, 
        data[0].password
    );
    if(!isPasswordCorrect)
      return res.status(404).json("invalid email or password")

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
});
};




export const logout=(req,res)=>{
res.clearCookie("access_token",{
  sameSite:"none",
  secure:true
}).status(200).json("user Loged out")   
};


