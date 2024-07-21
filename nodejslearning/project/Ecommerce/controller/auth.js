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
   