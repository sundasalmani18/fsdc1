import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "./categoryForm";
import { Modal } from "antd";

function Category() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [category_name, setCategory_name] = useState("");
  const [visible, setVisible] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [selected, setSelected] = useState(null);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8000/category/${selected.Id}`,
        {
          category_name: updateName,
        }
      );
      console.log(data?.Data, "data");
      setSelected(null);
      setUpdateName("");
      // setVisible(false);
      getCategories();
      alert(`${category_name} is updated`);
    } catch (err) {
      console.log(err, "error");
      //toast.error("something went wrong");
    }
  };

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
                        <button
                          className="btn btn-primary m-2"
                          onClick={() => {
                            setVisible(true);
                            setUpdateName(item.category_name);
                          }}
                        >
                          Edit
                        </button>
                        <button className="btn btn-danger"> Delete</button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
          <CategoryForm
            value={updateName}
            setValue={setUpdateName}
            handleSubmit={handleUpdate}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Category;
