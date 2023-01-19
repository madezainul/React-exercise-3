import React from "react";

const AddMovie = () => {
  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="bg-secondary rounded h-100 p-4">
        <h5 className="mb-4">Add Movie</h5>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-dark text-light"
            placeholder="title"
          />
          <label className="text-secondary">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-dark text-light"
            placeholder="title"
          />
          <label className="text-secondary">Price</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-dark text-light"
            placeholder="title"
          />
          <label className="text-secondary">Release Year</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-dark text-light"
            placeholder="title"
          />
          <label className="text-secondary">Rating</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control bg-dark text-light"></textarea>
          <label className="text-secondary">Description</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input className="form-check-input" type="checkbox" value="option1" />
          <label className="form-check-label text-dark">Actions</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="option2"
          />
          <label clasName="form-check-label text-secondary">Advanture</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control-lg bg-dark" type="file" />
          <label className="text-secondary"></label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
