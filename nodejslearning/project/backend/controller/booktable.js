import { db } from '../dbConn.js';



export const getBookTables = (req, res) => {
    const q = "select * from booking_table";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            booktables: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({msg: 'getCategories'})
}


export const getBookTable = (req, res) => {

    const query = "select * from booking_table where id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            booktable: data
        }
        return res.status(200).json({ Data: responseData })
    })

    // return res.status(200).json({ msg: 'getCatagory' })
}

export const addBookTable = (req, res) => {
    //  const query ="INSERT INTO category (category_name) VALUES ('Brunch')"; // static query
    // console.log('req', req.body)
    const query = "INSERT INTO booking_table (name, email,date_time,numofpeople,request) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.name,
        req.body.email,
        req.body.dateTime,
        req.body.numOfPeople,
        req.body.request,
    ]
 
    console.log('bodyData', bodyData)
    
    // return res.status(200).json({ msg: 'booktable' })

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            booktable: bodyData,
            msg: "table Booked"
        }
        return res.status(200).json({ Data: responseData })
    })

    // return res.status(200).json({ msg: 'booktable' })
}


export const updateBookTable = (req, res) => {
    const booktableId = req.params.id;
    // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
    const query = "UPDATE booking_table SET `name` = ?, `numOfPeople` = ? WHERE `id`= ?";

    const bodyData = [
        req.body.name,
        req.body.numOfPeople,
    ]

    db.query(query, [...bodyData, booktableId], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            booktable: bodyData,
            msg: "book table updated"
        }
        return res.status(200).json({ Data: responseData })
    })


    // return res.status(200).json({ msg: 'updateCategory' })
}


export const deleteBookTable = (req, res) => {

    const query = "DELETE FROM booking_table WHERE `id` = ?";
    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            booktable: data
        }
        return res.status(200).json({ Data: responseData })
    })
    // return res.status(200).json({ msg: 'deleteCategory' })
}