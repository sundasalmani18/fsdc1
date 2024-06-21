
import { useNavigate } from "react-router-dom";
import MozzarellaSticks from "../../assets/images/adminitems/MozzarellaSticks.jpg";
import nachos from "../../assets/images/adminitems/nachos.jpg";
import chickenwings from "../../assets/images/adminitems/chickenwings.jpg";
import SpinachArtichokeDi from "../../assets/images/adminitems/SpinachArtichokeDi.jpg";
import Bruschetta from "../../assets/images/adminitems/Bruschetta.jpg";
import potatoskin from "../../assets/images/adminitems/potatoskin.jpg";
import stuffedmushroom from "../../assets/images/adminitems/stuffedmushroom.jpg";
import BuffaloCauliflowe from "../../assets/images/adminitems/BuffaloCauliflowe.jpg";
import FriedCalamari from "../../assets/images/adminitems/FriedCalamari.jpg";
import JalapenoPoppers from "../../assets/images/adminitems/JalapenoPoppers.jpg";
import { useState, useEffect } from "react";


export default function AdminItems() {
    const navigate = useNavigate();
    const [itemsData, setItemsData] = useState('')

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        fetch('http://localhost:8080/item')
            .then((res) => { return res.json() })
            .then((data) => { setItemsData(data?.Data) })
            .catch(error => console.error("Error fetching data", error))
    }

    console.log('itemsData', itemsData)


    return (
        <>
            <div className="categories p-4">
                <div className="container">
                    <div className="row">
                        <div className=" d-flex p-2">
                            <i className="fa-solid fa-list fa-2x"></i>
                            <h4 className="m-2">Food Items</h4>
                        </div>

                        <div className="d-flex flex-row-reverse bd-highlight">
                            <a href="../admin/home.html" className=" btn btn-success m-2">Back</a>
                        </div>


                    </div>
                    <div className="categories-content p-5">
                        <div className="search-content p-3">
                            <form className="form-inline my-2 col-md-2 d-flex">
                                <input className="form-control mr-sm-2 p-2 col-md-2" type="search" placeholder="Search"
                                    aria-label="Search" />
                                <button className="btn btn-success m-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="add-content p-3">


                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover align-content-center">
                                <tbody>
                                    {itemsData?.items?.length > 0 ? (
                                        itemsData?.items?.map((item, index) => (

                                            <tr>
                                                <td className="ml-5">
                                                    <input className="form-check-input m-3  p-3  " type="checkbox" value=""
                                                        id="flexCheckChecked" />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    </label>
                                                </td>
                                                <td className="">
                                                    <img src={item.image}
                                                        className=" border object-cover bg-white p-1 rounded " alt="" />


                                                </td>
                                                <td>
                                                    <p className="text-base font-semibold text-xl mt-2">{item.item_name}</p>
                                                    <span className="text-xs">11-07-2023, 08:18:11</span>
                                                </td>

                                                <td>
                                                    <p className="text-base font-semibold text-xl mt-2">{item.description}</p>
                                                    <span className="text-xs">Description </span>
                                                </td>
                                                <td>
                                                    <p className="text-base font-semibold text-xl mt-2">{item.price}</p>
                                                    <span className="text-xs">Price</span>
                                                </td>
                                                <td>
                                                    <p className="text-base font-semibold text-xl mt-2">{item.category}</p>
                                                    <span className="text-xs">categories</span>
                                                </td>

                                                <td> <a onClick={() => navigate("/admin/category/additems")} className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">Add</a>
                                                </td>
                                                <td> <a onClick={() => navigate(`/admin/item/edititem/${item.item_id}`)} className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">Edit</a>
                                                </td>
                                                <td> <a className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">Delete</a>
                                                </td>
                                            </tr>

                                        ))
                                    ) : null}
                                    {/* <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={chickenwings}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Chicken wings</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={SpinachArtichokeDi}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Spinach Artichoke Dip</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={nachos}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Nachos</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={Bruschetta}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Bruschetta</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={potatoskin}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Potato Skin</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={stuffedmushroom}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Stuffed Mushroom</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={BuffaloCauliflowe}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Buffalo Cauliflower</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={FriedCalamari}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Fried Calamari</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="ml-5">
                                <input className="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                </label>
                            </td>
                            <td className="">
                                <img src={JalapenoPoppers}
                                    className=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Jalapeno Poppers</p>
                                <span className="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span className="text-xs">Cost</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span className="text-xs">Price</span>
                            </td>
                            <td>
                                <p className="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span className="text-xs">categories</span>
                            </td>
                            <td><a href="" className=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>  */}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}