import { db } from "../dbConnect.js";

export const getProducts = (req, res) => {
  const q = "select * from product";
  // const q = "SELECT category.category_name AS category, items.item_name ,items.description,items.image,items.price FROM category LEFT JOIN items ON category.category_name = items.category;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      categories: data,
    };
    return res.status(200).json({ Data: responseData });
  });
  // return res.status(200).json({msg: 'getCategories'})
};

export const getProduct = (req, res) => {
  const query = "select * from product where id =?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      category: data[0],
    };
    return res.status(200).json(responseData);
  });

  // return res.status(200).json({ msg: 'getCatagory' })
};

export const addProducts = (req, res) => {
  //  const query ="INSERT INTO category (category_name) VALUES ('Brunch')"; // static query
  // console.log('req', req.body)
  const query =
    "INSERT INTO product (product_name,description,price,category_id,quantity,image) VALUES (?)"; // dynamic query

  const bodyData = [
    req.body.product_name,
    req.body.description,
    req.body.price,
    req.body.category_id,
    req.body.quantity,
    req.body.image,
  ];

  console.log("bodyData", bodyData);

  // return res.status(200).json({ msg: 'addCategory' })

  db.query(query, [bodyData], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      category: bodyData,
      msg: "category created",
    };
    return res.status(200).json({ Data: responseData });
  });

  // return res.status(200).json({ msg: 'addCategory' })
};

export const updateProduct = (req, res) => {
  const categoryId = req.params.id;
  // const query = "UPDATE category SET category_name = 'breakfast' WHERE category_name = 'brekfast'"; // static query
  const query =
    "UPDATE product SET `product_name` = ?, `description` = ?, `price` = ?, `category_id` = ?,`quantity` = ?,`image` = ?, WHERE `id`= ?";

  const bodyData = [
    req.body.product_name,
    req.body.description,
    req.body.price,
    req.body.category_id,
    req.body.quantity,
    req.body.image,
  ];

  db.query(query, [...bodyData, categoryId], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      category: bodyData,
      msg: "category updated",
    };
    return res.status(200).json({ Data: responseData });
  });

  // return res.status(200).json({ msg: 'updateCategory' })
};

export const deleteProduct = (req, res) => {
  const query = "DELETE FROM product WHERE `id` = ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      category: data,
    };
    return res.status(200).json({ Data: responseData });
  });
  // return res.status(200).json({ msg: 'deleteCategory' })
};

export const searchCategory = (req, res) => {
  const query = "SELECT * FROM category WHERE category_name= ?";
  db.query(query, [req.params.key], (err, data) => {
    if (err) return res.status(500).send(err);

    let responseData = {
      result: true,
      categories: data,
    };
    return res.status(200).json({ Data: responseData });
  });
  // return res.status(200).json({msg: 'getCategories'})
};
