import { db } from '../dbConn.js';
import bcrypt from 'bcrypt'

export const register = (req, res) => {
    // existing user check 
    const q = "SELECT * FROM users where email = ?"

    db.query(q, [req.body.email], (err, data) => {
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



