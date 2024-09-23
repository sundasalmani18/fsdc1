import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { productid } = useParams();
  const [categoriesData, setCategoriesData] = useState();
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/product/${productid}`
      );
      setProductName(data.product.product_name);
      setId(data.product.id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setCategory(data.product.category);
      setQuantity(data.product.quantity);

      console.log("data", data.product);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  //  get All Category
  const getCategories = () => {
    fetch("http://localhost:8000/category")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoriesData(data?.Data);
      })
      .catch((error) => console.error("Error fetching data", error));
  };
  console.log("categoriesData", categoriesData);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("product_name", productname);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("image", image);
      const { data } = await axios.put(
        `http://localhost:8000/product/${productid}`,

        productData
      );
      alert(`${productname} is created`);
      console.log(data?.Data, "data");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDelete = async () => {
    try {
      const answer = window.prompt("are you sure you want to delete");
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:8000/product/${productid}`
      );

      navigate("/product");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          placeholder="select category"
          onChange={(value) => {
            setCategory(value);
          }}
          value={category.name}
        >
          <option>select Category</option>
          {categoriesData?.categories?.map((item) => (
            <option key={item.id} value={item.category_name}>
              {item.category_name}
            </option>
          ))}
        </select>
        <div>
          <label className="btn btn-outline-secondary">
            <input type="file" onChange={handleImage} />
          </label>
        </div>

        {image && (
          <div>
            <img
              src={URL.createObjectURL(image)}
              className="img img-responsive m-3"
              height={"200px"}
            />
          </div>
        )}

        <input
          type="text"
          class="form-control"
          placeholder="Enter Product Name"
          value={productname}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Enter Price "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Enter Quantity "
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UpdateProduct;
