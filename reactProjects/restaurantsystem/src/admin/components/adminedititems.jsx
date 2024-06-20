
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditItems() {
    const navigate = useNavigate();
    const { itemId } = useParams();

    const [formData, setFormData] = useState({})

    useEffect(() => {
        // if (!category) {
            getItemData()
         
        // }
    }, [])

    // const getItemData = async () => {
    //     const itemData = await axios.get(`http://localhost:8080/item/${itemId}`)
    //     setFormData(itemData.data.item)
    // }
    // const getItemData = async () => {
    //     const itemData = await axios.get(`http://localhost:8080/item/${itemId}`)
    //     setFormData(itemData.data.item)
    // }

    // console.log('formData', formData)



    const getItemData = async () => {
       await fetch(`http://localhost:8080/item/${itemId}`)
            .then((res) => { return res.json() })
            .then((data) => { setFormData(data?.Data) })
            .catch(error => console.error("Error fetching data", error))
    }

    console.log('getItemData', formData)

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}


const editItem = async (e) => {
    e.preventDefault()
    try {
        const fetchRes = await fetch(`http://localhost:8080/item/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(!fetchRes.ok){
            throw new Error('Error occurred')
        }
        const data = await fetchRes.json()
        console.log('fetchRes', data)
        navigate("/admin/items");
        // setFormData(initFormData)
        alert(data.Data.msg)
    } catch (error) {
        console.error('error fetching the data', error)

    }
}


// const addItem = async (e) => {
//     e.preventDefault()
//     try {
//         const fetchRes = await fetch('http://localhost:8080/item', {
//             method: 'POST',
//             headers: {
//                 'content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })

//         if(!fetchRes.ok){
//             throw new Error('Error occurred')
//         }
//         const data = await fetchRes.json()
//         console.log('fetchRes', data)

//         setFormData(initFormData)
//         alert(data.Data.msg)
//     } catch (error) {
//         console.error('error fetching the data', error)

//     }
// }

return (
 <>
 <div className="categories p-4 pl-5p">
        <div className=" d-flex p-3">
            <i className="fa-solid fa-circle-plus fa-2x"></i>
            <h6 className="m-2  d-flex">Edit Food Items</h6></div>
            <div className="d-flex flex-row-reverse bd-highlight">
                <a href="../admin/items.html" className=" btn btn-success m-2">Back</a>          
            </div> 
        

        <div className="item-info p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Food Item Information</h5>
                        <h6>Edit information for new food item with ingredients.</h6>
                    </div>

                    <form onSubmit={editItem} >
                    <div className="col-md-6">
                        <label class ="m-2">Name</label>
                        <input type="text" 
                        name="itemName"
                        className="form-control"
                        value={formData.item_name}
                        onChange={handleInputChange}
                        required/>
                        <label className="m-2">Category</label>
                        <input type="text" 
                        name="category"
                        className="form-control" 
                        value={formData.category}
                        onChange={handleInputChange}
                        required/>

                        <label className="m-2">Price</label>
                        <input type="text" 
                        name="price"
                        className="form-control"
                         value={formData.price}
                         onChange={handleInputChange}
                        required/>
                       
      
                        <div className="form-group">
                            <label  className="m-2" htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control" 
                            name="description"
                            id="exampleFormControlTextarea1" 
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="3"></textarea>
                          </div>
                        {/* <!-- <textarea name="" id=""   style="border-radius: 8px;width: 530px;"></textarea> --> */}
                        
                        <label className="m-2">Image</label>
                        <div className="image-content">
                            <div className="file-upload-wrapper p-2">
                                <input type="file" id="input-file-now-custom-1"
                                 className="file-upload" 
                                 name="image"
                                 data-default-file="https://mdbootstrap.com/img/Photos/Others/images/89.webp" 
                                 value={formData.image}
                                 onChange={handleInputChange}
                                 />
                              </div>
                        </div>

                        <div className="d-flex flex-row-reverse bd-highlight">
                            <a href="../admin/items.html" className=" btn btn-success m-2">Cancel</a>
                            <button type="submit"className="btn btn-primary m-2" >Save </button>     
                        </div>        
                    </div>
                    </form>

                </div>
            </div>
        </div>

    </div>
 </>
);
}