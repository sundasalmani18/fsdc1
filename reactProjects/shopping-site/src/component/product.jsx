import React, { useState } from "react";
import axios from "axios";
import ProductForm from "./productForm";

function Product() {
  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUplaod = async () => {
    const formData = new FormData();

    formData.append("image", file);
    await axios
      .post("http://localhost:8000/product", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("image add successful");
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleUplaod}>upload</button>
    </div>
  );
}

export default Product;
