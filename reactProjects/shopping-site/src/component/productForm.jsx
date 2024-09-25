import { useState, useEffect } from "react";
import Category from "./category";
import axios from "axios";

function ProductForm() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  //get All Category
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
      console.log("category", category);

      const { data } = await axios.post(
        "http://localhost:8000/product",

        productData
      );
      alert(`${productname} is created`);
      console.log(data?.Data, "data");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <select
            placeholder="select category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
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
      </div>
    </>
  );
}
export default ProductForm;
