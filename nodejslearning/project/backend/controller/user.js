import { db } from '../dbConn.js';



export const getUsers = (req, res) => {
    const q = "select * from  users";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            users: data
        }
        return res.status(200).json({ Data: responseData })
    })
   
}

export const getUser = (req, res) => {

    const query = "select * from users where id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            user: data
        }
        return res.status(200).json({ Data: responseData })
    })

    
}


export const addUser = (req, res) => {
 
    const query = "INSERT INTO users (name, designation,first_name,last_name,email,number,password) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.first_name,
        req.body.designation,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.number,
        req.body.password,
    ]

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            user: bodyData,
            msg: "user inserted"
        }
        return res.status(200).json({ Data: responseData })
    })
}
export const updateUser= (req, res) => {
    const userId = req.params.id;
    // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
    const query = "UPDATE users SET `name` = ?, `designation` = ? WHERE `id`= ?";

    const bodyData = [
        req.body.name,
        req.body.designation,
    ]

    db.query(query, [...bodyData, userId], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            user: bodyData,
            msg: "user updated"
        }
        return res.status(200).json({ Data: responseData })
    })

}


