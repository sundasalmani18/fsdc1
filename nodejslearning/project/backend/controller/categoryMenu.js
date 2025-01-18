import { db } from '../dbConn.js';


export const getMenu = (req, res) => {
    const q = "SELECT category.category_name AS category, items.item_name ,items.description,items.image,items.price FROM category RIGHT JOIN items ON category.category_name = items.category;";

    const removeDuplicateData = (dataValue) => {
        let unique=[];
        dataValue.forEach(element => {
            if(!unique.includes(element)){
                unique.push(element);
            }
        });
        return unique;
    }

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)
        let category = []
        for (let value in data) {
            category.push(data[value]?.category)
        }

        let uniqueCategory = removeDuplicateData(category)


        let responseData = {
            result: true,
            categories: uniqueCategory,
            categoryMenu: data
        }
        return res.status(200).json({ Data: responseData })
    })


    // return res.status(200).json({msg: 'getCategories'})

}

