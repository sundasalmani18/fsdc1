import nodemon from "nodemon";
import { db } from "../dbCon";

export const register=(req ,res)=>{
  const {name,email,password,phone,address} =req.body;

  const query ="SELECT * FROM users WHERE email=?"
  db.query(query,[email],(err,data)=>{
    if(err) return res.status(500).json(err);
    if(data.length) return res.status(409).json("user already register")

        const salt =  bcrypt.genSalt(10);
        const hashedPassword =  bcrypt.hash(password, salt);

   const q="INSERT INTO users(name,email, password,phone,address)VALUES(?)";
    
 const bodyData=[
    name,
    email,
 hashedPassword,
    phone,
    address
 ]
    db.query(q,[bodyData],(err,data)=>{
   if(err)return res.status(500).json(err)

let responseData={
  result:true,
  user:bodyData,
  msg :"register successful"
}

return res.status(200).json({Data:responseData})

    })

  })

}

export const login=(req ,res)=>{
const email = req.body.email
const password = req.body.password

const query ="SELECT * FROM user where email =? "

db.query(query,[email],(err,data)=>{

  if (err) return res.status(500).json(err);
  if(data.length ==0) return res.status(404).json("email not found");
  const hashedPassword = result[0].password
  
    const isPasswordCorrect= bcrypt.compare(password, hashedPassword)
    if(!isPasswordCorrect)
      return res.status(404).json("invalid email or password")

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
});
}




export const loogout=(req,res)=>{
res.clearCookie("access_token",{
  sameSite:"none",
  secure:true
}).status(200).json("user Loged out")   
};


