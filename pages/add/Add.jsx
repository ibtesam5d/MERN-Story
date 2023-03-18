import React from "react";
import "./Add.scss";
const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Book</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Caught in the plan.." />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="action">Action</option>
              <option value="drama">Drama</option>
              <option value="mystery">Mystery</option>
              <option value="comedy">Comedy</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />

            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce your srory to readers"
              cols="0"
              rows="16"
            ></textarea>
            <button>Create</button>
          </div>
          {/* <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Add;
