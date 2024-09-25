import { db } from "../dbConnect.js";
import path from "path"; //for single specific Image
import fs from "fs"; //for single specific Image

export const getProducts = (req, res) => {
  const q = "select * from products";
  // const q = "SELECT category.category_name AS category, items.item_name ,items.description,items.image,items.price FROM category LEFT JOIN items ON category.category_name = items.category;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      products: data,
    };
    return res.status(200).json({ Data: responseData });
  });
  // return res.status(200).json({msg: 'getCategories'})
};

export const getProduct = (req, res) => {
  const query = "select * from products where id =?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      product: data[0],
    };
    return res.status(200).json(responseData);
  });

  // return res.status(200).json({ msg: 'getCatagory' })
};

export const addProducts = async (req, res) => {
  // console.log(req.file);
  const query =
    "INSERT INTO products(product_name,description,price,category,quantity,image) VALUES (?)"; // dynamic query
  // const file=req.file.filename
  const bodyData = [
    req.body.product_name,
    req.body.description,
    req.body.price,
    req.body.category,
    req.body.quantity,
    req.file.filename,
  ];

  console.log("bodyData", bodyData);

  // return res.status(200).json({ msg: 'addCategory' })

  db.query(query, [bodyData], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      product: bodyData,
      msg: "product created",
    };
    return res.status(200).json({ Data: responseData });
  });

  // return res.status(200).json({ msg: 'addCategory' })
};

export const updateProduct = (req, res) => {
  const productId = req.params.id;
  // const image = req.file.filename;
  // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
  const query =
    "UPDATE products SET `product_name` = ?, `description` = ?, `price` = ? ,`category`=?,`quantity` = ?, `image` =?  WHERE `id` = ?";

  const bodyData = [
    req.body.product_name,
    req.body.description,
    req.body.price,
    req.body.category,
    req.body.quantity,
    // image,
  ];

  console.log("bodyData", bodyData);
  db.query(query, [...bodyData, productId], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      product: bodyData,
      msg: "product updated",
    };
    return res.status(200).json({ Data: responseData });
  });

  // return res.status(200).json({ msg: 'updateCategory' })
};

export const deleteProduct = (req, res) => {
  const query = "DELETE FROM products WHERE `id` = ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      product: data,
    };
    return res.status(200).json({ Data: responseData });
  });
  // return res.status(200).json({ msg: 'deleteCategory' })
};

// export const searchCategory = (req, res) => {
//   const query = "SELECT * FROM category WHERE category_name= ?";
//   db.query(query, [req.params.key], (err, data) => {
//     if (err) return res.status(500).send(err);

//     let responseData = {
//       result: true,
//       categories: data,
//     };
//     return res.status(200).json({ Data: responseData });
//   });
//   // return res.status(200).json({msg: 'getCategories'})
// };

// export const getProductImage = (req, res) => {
//   const filepath = path.join(__dirname, "upload", id);

//   // Check if the file exists
//   fs.access(filepath, fs.constants.F_OK, (err) => {
//     if (err) {
//       return res.status(404).send("Image not found.");
//     }
//     res.sendFile(filepath); // Send the image file to the client
//   });
//   // return res.status(200).json({ msg: 'getCatagory' })
// };
