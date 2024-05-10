import MozzarellaSticks from "../assets/images/adminitems/MozzarellaSticks.jpg";
import nachos from "../assets/images/adminitems/nachos.jpg";
import chickenwings from "../assets/images/adminitems/chickenwings.jpg";
import SpinachArtichokeDi from  "../assets/images/adminitems/SpinachArtichokeDi.jpg";
import Bruschetta from "../assets/images/adminitems/Bruschetta.jpg";
import potatoskin from  "../assets/images/adminitems/potatoskin.jpg";
import stuffedmushroom from "../assets/images/adminitems/stuffedmushroom.jpg";
import BuffaloCauliflowe from "../assets/images/adminitems/BuffaloCauliflowe.jpg";
import FriedCalamari from  "../assets/images/adminitems/FriedCalamari.jpg"; 
import JalapenoPoppers from  "../assets/images/adminitems/JalapenoPoppers.jpg";
import team1 from "../assets/images/team-1.jpg";

export default function AdminItems() {
    return (
        <>
            <div class="categories p-4">
        <div class="container">
            <div class="row">
                <div class=" d-flex p-2">
                    <i class="fa-solid fa-list fa-2x"></i>
                    <h4 class="m-2">Food Items</h4>
                </div>

                <div class="d-flex flex-row-reverse bd-highlight">
                    <a href="../admin/home.html" class=" btn btn-success m-2">Back</a>
                </div>


            </div>
            <div class="categories-content p-5">
                <div class="search-content p-3">
                    <form class="form-inline my-2 col-md-2 d-flex">
                        <input class="form-control mr-sm-2 p-2 col-md-2" type="search" placeholder="Search"
                            aria-label="Search"/>
                        <button class="btn btn-success m-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div class="add-content p-3">
                    <a href="../admin/additem.html" class="btn btn-success  my-sm-0">Add</a>

                </div>
                <div class="table-responsive">
                    <table class="table table-hover align-content-center">
                        <tbody>
                            <tr>
                                <td class="ml-5">
                                    <input class="form-check-input m-3  p-3  " type="checkbox" value=""
                                        id="flexCheckChecked"/>
                                    <label class="form-check-label" for="flexCheckChecked">
                                    </label>
                                </td>
                                <td class="">
                                    <img src={MozzarellaSticks}
                                        class=" border object-cover bg-white p-1 rounded " alt=""/>


                                </td>
                                <td>
                                    <p class="text-base font-semibold text-xl mt-2">Mozzarella Sticks</p>
                                    <span class="text-xs">11-07-2023, 08:18:11</span>
                                </td>

                                <td>
                                    <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                    <span class="text-xs">Cost</span>
                                </td>
                                <td>
                                    <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                    <span class="text-xs">Price</span>
                                </td>
                                <td>
                                    <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                    <span class="text-xs">categories</span>
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
                                <img src={chickenwings}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Chicken wings</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={SpinachArtichokeDi}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Spinach Artichoke Dip</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={nachos}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Nachos</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={Bruschetta}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Bruschetta</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={potatoskin}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Potato Skin</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={stuffedmushroom}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Stuffed Mushroom</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={BuffaloCauliflowe}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Buffalo Cauliflower</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={FriedCalamari}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Fried Calamari</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
                                <img src={JalapenoPoppers}
                                    class=" border object-cover bg-white p-1 rounded " alt=""/>
                                   

                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Jalapeno Poppers</p>
                                <span class="text-xs">11-07-2023, 08:18:11</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$8.00</p>
                                <span class="text-xs">Cost</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">$12.00</p>
                                <span class="text-xs">Price</span>
                            </td>
                            <td>
                                <p class="text-base font-semibold text-xl mt-2">Appetizers</p>
                                <span class="text-xs">categories</span>
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
    )
}