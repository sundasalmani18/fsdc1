import { db } from '../dbConn.js';

export const getItems = (req, res) => {
    const q = "select * from items";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            items: data
        }
        return res.status(200).json({ Data: responseData })
    })
   
}

export const getItem = (req, res) => {

    const query = "select * from items where item_id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            item: data
        }
        return res.status(200).json({ Data: responseData })
    })

    
}

export const addItem = (req, res) => {
 
    const query = "INSERT INTO items (item_name,category,description,image,price) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.itemName,
        req.body.category,
        req.body.description,
        req.body.image,
        req.body.price
       

    ]

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            item: bodyData,
            msg: "item added"
        }
        return res.status(200).json({ Data: responseData })
    })
}

export const updateItem = (req, res) => {
    const categoryId = req.params.id;
    // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
    const query = "UPDATE items SET `item_name` = ?, `category` = ? WHERE `item_id`= ?";

    const bodyData = [
        req.body.itemName,
        req.body.category,
    ]

    db.query(query, [...bodyData, categoryId], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            item: bodyData,
            msg: "item updated"
        }
        return res.status(200).json({ Data: responseData })
    })


    // return res.status(200).json({ msg: 'updateCategory' })
}


export const deleteItem = (req, res) => {

    const query = "DELETE FROM items WHERE `item_id` = ?";
    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            item: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({ msg: 'deleteCategory' })
}