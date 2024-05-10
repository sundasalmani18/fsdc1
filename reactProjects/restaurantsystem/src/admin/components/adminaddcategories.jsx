export default function AddCategories() {
    return(

    <>
     <div class="categories p-4">
        <div class=" d-flex p-3">
            <i class="fa-solid fa-circle-plus fa-2x"></i>
            <h6 class="m-2  d-flex">Add Categories</h6>
        </div>

            <div class="d-flex flex-row-reverse bd-highlight">
                <a href="../admin/categories.html" class=" btn btn-success m-2">Back</a>          
            </div> 
            {/* <!-- <div class=" float-right">  
                <a href="../admin/home.html"  class="btn btn-success" >Back</a>
            </div> --> */}
        

        <div class="category-info p-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Categories Information</h5>
                        <h6>Enter information for new product category</h6>
                    </div>


                    <div class="col-md-6">
                        <label class="m-2">Name</label>
                        <input type="text" class="form-control" required/>
                        <label class="m-2">Image</label>
                        <div class="image-content">
                            <div class="file-upload-wrapper p-2">
                                <input type="file" id="input-file-now-custom-1" class="file-upload" data-default-file="https://mdbootstrap.com/img/Photos/Others/images/89.webp" />
                              </div>
                        </div>

                        <div class="d-flex flex-row-reverse bd-highlight">
                            <a href="../admin/categories.html" class=" btn btn-success m-2">Cancel</a>
                            <a href="" class="btn btn-primary m-2" >Save </a>     
                        </div>        
                    </div>

                </div>
            </div>
        </div>


    </div>
    </>
    );

}