import { db } from '../dbConn.js';



export const getTestimonials = (req, res) => {
    const q = "select * from testimonial";

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            testimonials: data
        }
        return res.status(200).json({ Data: responseData })
    })
   
}

export const getTestimonial = (req, res) => {

    const query = "select * from testimonial where id =?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            testimonial: data
        }
        return res.status(200).json({ Data: responseData })
    })

    
}


export const addTestimonial = (req, res) => {
 
    const query = "INSERT INTO testimonial (clientname,description,profession,images) VALUES (?)"; // dynamic query

    const bodyData = [
        req.body.clientname,
        req.body.description,
        req.body.profession,
        req.body.images
       

    ]

    db.query(query, [bodyData], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            testimonial: bodyData,
            msg: "testimonail inserted"
        }
        return res.status(200).json({ Data: responseData })
    })
}
export const updateTestimonial= (req, res) => {
    const testimonailId = req.params.id;
    // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
    const query = "UPDATE testimonial SET `clientname` = ?, `description` = ? WHERE `id`= ?";

    const bodyData = [
        req.body.clientname,
        req.body.description,
    ]

    db.query(query, [...bodyData, testimonailId], (err, data) => {
        if (err) return res.status(500).send(err)

        let responseData = {
            result: true,
            testimonial: bodyData,
            msg: "testimonails updated"
        }
        return res.status(200).json({ Data: responseData })
    })

}


