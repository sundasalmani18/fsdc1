import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./productForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/product");
      setProduct(data.Data.products);
      console.log("product", data.Data.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <div className="col-md-9 d-flex">
        {product.map((item) => (
          <div key={item.id}>
         
            <div class="card">
              <img
                class="card-img-top"
                src={`http://localhost:8000/upload/${item.image}`}
                alt={item.image}
              />
              <div class="card-body">
                <h5 class="card-title">{item.product_name}</h5>
                <p class="card-text">{item.description}</p>
              </div>
              <button onClick={() => navigate(`/updateproduct/${item.id}`)}>Update</button>
            </div>
     
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
