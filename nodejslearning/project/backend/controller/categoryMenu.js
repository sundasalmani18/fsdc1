import { db } from '../dbConn.js';


export const getMenu = (req, res) => {
    const q = "SELECT category.category_name AS category, items.item_name ,items.description,items.image,items.price FROM category LEFT JOIN items ON category.category_name = items.category;";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({msg: 'getCategories'})
}