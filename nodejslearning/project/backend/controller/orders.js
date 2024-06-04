import { db } from '../dbConn.js';
export const getOrders = (req, res) => {
    const q = "select * from orders";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            orders: data
        }
        return res.status(200).json({ Data: responseData })
    })
   
}

export const getOrder = (req, res) => {

    const query = "select * from orders where order_id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            order: data
        }
        return res.status(200).json({ Data: responseData })
    })

    
}

export const addOrder = (req, res) => {
 
    const query = "INSERT INTO orders (order_type_id,employee_id,order_time,total_amount) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.orderTypeId,
        req.body.employeeId,
        req.body.orderTime,
        req.body.totalAmount
       

    ]

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            order: bodyData,
            msg: "order inserted"
        }
        return res.status(200).json({ Data: responseData })
    })
}