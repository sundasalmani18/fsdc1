import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
