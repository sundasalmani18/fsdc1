import { db } from '../dbConn.js';



export const getUsers = (req, res) => {
    const q = "select * from  user_record";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            user: data
        }
        return res.status(200).json({  Data:responseData })
    })
   
}

export const getUser = (req, res) => {

    const query = "select * from user_record where id =?";

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
 
    const query = "INSERT INTO user_record (name,email) VALUES (?)"; // dynamic query

    const bodyData = [
        
        req.body.name,
        req.body.email
        
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
    const query = "UPDATE user_record SET `name` = ?, `email` = ? WHERE `id`= ?";

    const bodyData = [
        req.body.name,
        req.body.email
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


export const deleteUser = (req, res) => {

    const query = "DELETE FROM user_record WHERE `id` = ?";
    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            user: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({ msg: 'deleteCategory' })
}