export default function AddCategories() {
    return(

    <>
     <div className="categories pl-5p">
        <div className=" d-flex p-3">
            <i className="fa-solid fa-circle-plus fa-2x"></i>
            <h6 className="m-2  d-flex">Add Categories</h6>
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
                        <h5>Categories Information</h5>
                        <h6>Enter information for new product category</h6>
                    </div>


                    <div className="col-md-6">
                        <label className="m-2">Name</label>
                        <input type="text" className="form-control" required/>
                        <label className="m-2">Image</label>
                        <div className="image-content">
                            <div className="file-upload-wrapper p-2">
                                <input type="file" id="input-file-now-custom-1" className="file-upload" data-default-file="https://mdbootstrap.com/img/Photos/Others/images/89.webp" />
                              </div>
                        </div>

                        <div className="d-flex flex-row-reverse bd-highlight">
                            <a href="../admin/categories.html" className=" btn btn-success m-2">Cancel</a>
                            <a href="" className="btn btn-primary m-2" >Save </a>     
                        </div>        
                    </div>

                </div>
            </div>
        </div>


    </div>
    </>
    );

}