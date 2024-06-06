import { db } from '../dbConn.js';



export const getCategories = (req, res) => {
    const q = "select * from category";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            categories: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({msg: 'getCategories'})
}


export const getCategory = (req, res) => {

    const query = "select * from category where category_id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: data
        }
        return res.status(200).json({ Data: responseData })
    })

    // return res.status(200).json({ msg: 'getCatagory' })
}

export const addCategory = (req, res) => {
    //  const query ="INSERT INTO category (category_name) VALUES ('Brunch')"; // static query
    // console.log('req', req.body)
    const query = "INSERT INTO category (category_name, category_image) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.category_name,
        req.body.category_image,
    ]

    
    console.log('bodyData', bodyData)
    
    // return res.status(200).json({ msg: 'addCategory' })

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: bodyData,
            msg: "category created"
        }
        return res.status(200).json({ Data: responseData })
    })

    // return res.status(200).json({ msg: 'addCategory' })
}


export const updateCategory = (req, res) => {
    const categoryId = req.params.id;
    // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
    const query = "UPDATE category SET `category_name` = ?, `category_image` = ? WHERE `category_id`= ?";

    const bodyData = [
        req.body.category_name,
        req.body.category_image,
    ]

    db.query(query, [...bodyData, categoryId], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: bodyData,
            msg: "category updated"
        }
        return res.status(200).json({ Data: responseData })
    })


    // return res.status(200).json({ msg: 'updateCategory' })
}


export const deleteCategory = (req, res) => {

    const query = "DELETE FROM category WHERE `category_id` = ?";
    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({ msg: 'deleteCategory' })
}