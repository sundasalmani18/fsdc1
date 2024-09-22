import { useState, useEffect } from "react";
import Category from "./category";

function ProductForm() {
  const [categoriesData, setCategoriesData] = useState();
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
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
  return (
    <>
      <h2>Add Product</h2>
      <select
        name="cars"
        id="cars"
        onChange={(value) => {
          setCategory(value);
        }}
      >
        {categoriesData?.categories?.map((item) => (
          <option key={item.id} value={item.category_name}>
            {item.category_name}
          </option>
        ))}
      </select>
    </>
  );
}
export default ProductForm;
