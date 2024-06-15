import { useNavigate } from "react-router-dom";
import sandwiches from "../../assets/images/admin-categories/sandwiches.jpg";
import salad from "../../assets/images/admin-categories/salad.jpg";
import burger from "../../assets/images/admin-categories/burger.jpg";
import appetizer from "../../assets/images/admin-categories/appetizer.jpg";
import soup from "../../assets/images/admin-categories/soup.jpg";
import pizza from "../../assets/images/admin-categories/pizza.jpg";
import pasta from "../../assets/images/admin-categories/pasta.jpg";
import seafoods from "../../assets/images/admin-categories/seafoods.jpg";
import steak from "../../assets/images/admin-categories/steak.jpg";
import chicken from "../../assets/images/admin-categories/chicken.jpg";
import { useEffect, useState } from "react";

export default function AdminCategory() {

    const navigate = useNavigate();
    const [categoriesData, setCategoriesData] = useState('')

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        fetch('http://localhost:8080/category')
            .then((res) => { return res.json() })
            .then((data) => { setCategoriesData(data?.Data) })
            .catch(error => console.error("Error fetching data", error))
    }

    console.log('categoriesData', categoriesData)


    const handelDelete = async (id) => {
        console.log("id : -", id);
       
        try {
          const response = await fetch('http://localhost:8080/category/' + id, {
            method: "DELETE",
          });
          if (!response.ok) {
            throw new Error("Failed to delete item");
          }
          setCategoriesData(categoriesData.filter((item) => item.id !== id));
        } catch (error) {
            alert("data delete")
        } 
        // finally {
        //   setIsLoading(false);
        // }
      };
    return (
        <>
            <div className="categories pl-5p">
                <div className="container">
                    <div className="row">
                        <div className=" d-flex mb-3">
                            <i className="fa-solid fa-list fa-2x"></i>
                            <h4 className="m-2">Categories</h4> </div>

                        <div className="d-flex flex-row-reverse bd-highlight">
                            <a href="../admin/home.html" className=" btn btn-success m-2">Back</a>
                        </div>


                    </div>
                    <div className="categories-content ">
                        <div className="search-content p-3">
                            <form className="form-inline my-2 col-md-2 d-flex">
                                <input className="form-control mr-sm-2 p-2 col-md-2" type="search" placeholder="Search"
                                    aria-label="Search" />
                                <button className="btn btn-success m-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="add-content p-3">
                        
                            {/* <!-- <button className="btn btn-success m-2 my-sm-0" type="submit">Add</button> --> */}
                        </div>

                        <div className="table-responsive">

                            <table className="table table-hover align-content-center">
                                <tbody>
                                    {categoriesData?.categories?.length > 0 ? (
                                        categoriesData?.categories?.map((item, index) => (
                                            <tr>
                                                <td className="ml-5">
                                                    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                                        id="flexCheckChecked" />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    </label>
                                                </td>
                                                <td className="">
                                                    <img src={item.category_image} className=" border object-cover bg-white p-1 rounded " alt="" />


                                                </td>
                                                <td>
                                                    <p className="text-base font-semibold text-xl mt-2">{item.category_name}</p>
                                                    <span className="text-xs">11-07-2023, 08:18:11</span>
                                                </td>
                                                <td>    <a onClick={() => navigate("/admin/category/addcategories")} className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">Add</a>
                                                </td>
                                                <td><a href="" onClick={() => navigate(`/admin/category/editcategory/${item.category_id}`)} className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">Edit</a>
                                                </td>
                                                <td><a href=""    onClick={() => handelDelete(item.category_id)} className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">Delete</a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : null}

                                </tbody>
                            </table>

                        </div>



                    </div>

                </div>
            </div>
        </>
    );

}


{/* <tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={salad}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Salad</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={burger}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Burger</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={appetizer}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={soup}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Soup</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={pizza}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Pizza</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={pasta}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Pasta</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={seafoods}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Seafood</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={steak}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Steak</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr>
<tr>
<td className="ml-5">
    <input className="form-check-input m-3  p-3 " type="checkbox" value=""
        id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    </label>
</td>
<td className="">
    <img src={chicken}
        className=" border object-cover bg-white p-1 rounded " alt="" />


</td>
<td>
    <p className="text-base font-semibold text-xl mt-2">Chicken</p>
    <span className="text-xs">11-07-2023, 08:18:11</span>
</td>
<td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
</td>
</tr> */}