import { db } from '../dbConn.js';



export const getEmployees = (req, res) => {
    const q = "select * from employees";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            employees: data
        }
        return res.status(200).json({ Data: responseData })
    })
   
}

export const getEmployee = (req, res) => {

    const query = "select * from employees where employee_id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            employee: data
        }
        return res.status(200).json({ Data: responseData })
    })

    
}


export const addEmployee = (req, res) => {
 
    const query = "INSERT INTO employees (full_name, position,phone_no,email,salary) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.full_name,
        req.body.position,
        req.body.phone_no,
        req.body.email,
        req.body.salary,

    ]

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: bodyData,
            msg: "employee inserted"
        }
        return res.status(200).json({ Data: responseData })
    })
}
export const updateEmployee= (req, res) => {
    const employeeId = req.params.id;
    // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
    const query = "UPDATE employees SET `full_name` = ?, `position` = ? WHERE `employee_id`= ?";

    const bodyData = [
        req.body.full_name,
        req.body.position,
    ]

    db.query(query, [...bodyData, employeeId], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            category: bodyData,
            msg: "employee updated"
        }
        return res.status(200).json({ Data: responseData })
    })

}


