import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function EditCategories() {
    const navigate = useNavigate();
    const { catId } = useParams();

    const [formData, setFormData] = useState({})

    useEffect(() => {
        // if (!category) {
        getCategoryData()
        // }
    }, [])

    const getCategoryData = async () => {
        const catData = await axios.get(`http://localhost:8080/category/${catId}`)
        setFormData(catData.data.category)
    }

    console.log('formData', formData)

    // const initFormData = {
    //         category_name: "",
    //         category_image: "#"
    // }
    // const [categoryName, setCategoryName] = useState('')
    // const [formData, setFormData] = useState(initFormData)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const editCategory = async (e) => {
        e.preventDefault()
        try {
            const fetchRes = await fetch(`http://localhost:8080/category/${catId}`, {
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
            navigate("/admin/category");
            // setFormData(initFormData)
            alert(data.Data.msg)
        } catch (error) {
            console.error('error fetching the data', error)

        }
    }

    return (

        <>
            <div className="categories pl-5p">
                <div className=" d-flex p-3">
                    <i className="fa-solid fa-circle-plus fa-2x"></i>
                    <h6 className="m-2  d-flex">Edit Categories</h6>
                </div>

                <div className="d-flex flex-row-reverse bd-highlight">
                    <a href="../admin/categories.html" className=" btn btn-success m-2">Back</a>
                </div>
                {/* <!-- <div className=" float-right">  
                <a href="../admin/home.html"  className="btn btn-success" >Back</a>
            </div> --> */}


                <div className="category-info p-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h5> Edit Categories Information</h5>
                                <h6>Enter information for new product category</h6>
                            </div>

                            <form onSubmit={editCategory}>
                                <div className="col-md-6">
                                    <label className="m-2">Name</label>
                                    <input
                                        name="category_name"
                                        type="text"
                                        className="form-control"
                                        required
                                        value={formData.category_name}
                                        onChange={handleInputChange}
                                    />
                                    <label className="m-2">Image</label>
                                    <div className="image-content">
                                        <div className="file-upload-wrapper p-2">
                                            <input type="file" id="input-file-now-custom-1" className="file-upload" data-default-file="https://mdbootstrap.com/img/Photos/Others/images/89.webp" />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row-reverse bd-highlight">
                                        <a href="../admin/categories.html" className=" btn btn-success m-2">Cancel</a>
                                        <button type="submit" className="btn btn-primary m-2" >Save </button>
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