import { useNavigate } from "react-router-dom";
import sandwiches from "../../assets/images/admin-categories/sandwiches.jpg";
import salad from "../../assets/images/admin-categories/salad.jpg";
import burger from "../../assets/images/admin-categories/burger.jpg";
import appetizer from "../../assets/images/admin-categories/appetizer.jpg";
import soup from "../../assets/images/admin-categories/soup.jpg";
import pizza from "../../assets/images/admin-categories/pizza.jpg";
import pasta from "../../assets/images/admin-categories/pasta.jpg";
import seafoods from  "../../assets/images/admin-categories/seafoods.jpg";
import steak from  "../../assets/images/admin-categories/steak.jpg";
import chicken from  "../../assets/images/admin-categories/chicken.jpg";

export default function AdminCategory() { 
    
    const navigate = useNavigate();
    return(
<>
        <div class="categories pl-5p">
        <div class="container">
            <div class="row">
                <div class=" d-flex mb-3">
                    <i class="fa-solid fa-list fa-2x"></i>
                    <h4 class="m-2">Categories</h4> </div>

                    <div class="d-flex flex-row-reverse bd-highlight">
                        <a href="../admin/home.html" class=" btn btn-success m-2">Back</a>          
                    </div>
               

            </div>
            <div class="categories-content ">
                <div class="search-content p-3">
                    <form class="form-inline my-2 col-md-2 d-flex">
                        <input class="form-control mr-sm-2 p-2 col-md-2" type="search" placeholder="Search"
                            aria-label="Search"/>
                        <button class="btn btn-success m-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div class="add-content p-3">
                    <a onClick={()=>navigate("/admin/category/addcategories")}  class="btn btn-success m-2 my-sm-0">Add</a>
                    {/* <!-- <button class="btn btn-success m-2 my-sm-0" type="submit">Add</button> --> */}
                </div>

                <div class="table-responsive">

            <table class="table table-hover align-content-center">
                  <tbody>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={sandwiches} class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Sandwiches</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                         <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={salad}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Salad</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={burger}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Burger</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={appetizer}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={soup}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Soup</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={pizza}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Pizza</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={pasta}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Pasta</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={seafoods}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Seafood</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={steak}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Steak</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="ml-5">
                                <input class="form-check-input m-3  p-3 " type="checkbox" value=""
                                    id="flexCheckChecked"/>
                                <label class="form-check-label" for="flexCheckChecked">
                                </label>
                            </td>
                            <td class="">
                                <img src={chicken}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Chicken</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td><a href="" class=" btn btn-primary hover:bg-cyan text-white rounded mt-3">View</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
                   
            

        </div>

    </div>
</div>
</>
    );

}
