import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "./categoryForm";

function Category() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [category_name, setCategory_name] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/category", {
        category_name,
      });
      getCategories();
      alert(`${category_name} is created`);
      console.log(data?.Data, "data");
    } catch (err) {
      console.log(err, "error");
      //toast.error("something went wrong");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

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

  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-md-3">
          <h1>Category</h1>
        </div>
        <div className="col-md-9 m-5">
          <div>
            <CategoryForm
              handleSubmit={handleSubmit}
              value={category_name}
              setValue={setCategory_name}
            />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData?.categories?.length > 0
                ? categoriesData?.categories?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category_name}</td>
                      <td>
                        <button className="btn btn-primary m-2"> Edit</button>
                        <button className="btn btn-danger"> Delete</button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Category;
