import { db } from '../dbConn.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register =  (req, res) => {
    // existing user check 
    const q = "SELECT * FROM users where email = ?"

    db.query  (q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("user already exits");

        // pasword convert to hash bcryp
        
        const salt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(req.body.password, salt)

        const query2 = "INSERT INTO users (first_name,last_name,email,number,password) VALUES (?)"; // dynamic query

        const bodyData = [
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.number,
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
export const login = (req, res) => {
    //CHECK USER
  
    const q = "SELECT * FROM users where email = ?";
  
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("Email not found!");
  
      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong email or password!");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
        
    });
  };
  
  export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };


