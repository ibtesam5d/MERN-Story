import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookReducer, INITIAL_STATE } from "../../reducers/bookReducer";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/uploadImage";
import "./Add.scss";
import { cards } from "../../../data";

const Add = () => {
  const [coverImg, setCoverImg] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(bookReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(coverImg);
      console.log(cover);
      setUploading(false);
      dispatch({ type: "ADD_COVER", payload: { cover } });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (book) => {
      return newRequest.post(`/books`, book);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myBooks"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/my-books");
  };

  console.log(state);
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Book</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              name="title"
              type="text"
              placeholder="Caught in the plan.."
              onChange={handleChange}
            />

            <label htmlFor="">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="">please select a category</option>
              {cards.map((item) => {
                return (
                  <option value={item.category} key={item.id}>
                    {item.category}
                  </option>
                );
              })}
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setCoverImg(e.target.files[0])}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading.." : "upload"}
              </button>
            </div>

            <label htmlFor="" onChange={handleChange}>
              Price
            </label>
            <input type="number" name="price" onChange={handleChange} />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>

            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your srory to readers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
