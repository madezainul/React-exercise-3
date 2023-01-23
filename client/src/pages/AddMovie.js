import React, { useState, useEffect } from "react";
import { getGenres } from "../axios/genreAxios";
import { addMovie } from "../axios/movieAxios";

const AddMovie = () => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    release: 0,
    rating: 0,
    desc: "",
    genres: [],
    image: "",
  });

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenres((result) => setGenres(result));
  });

  const handleChange = (e) => {
    const id = e.target.value;
    if (form.genres.includes(id)) {
      setForm({ ...form, genres: form.genres.filter((g) => g !== g.id) });
    } else {
      setForm({ ...form, genres: [...form.genres, id] });
    }
  };

  const submitHandler = () => {
    addMovie(form)
    console.log(form);
  };

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="bg-secondary rounded h-100 p-4">
        <h5 className="mb-4">Add Movie</h5>
        {/* title */}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type="text"
            className="form-control bg-dark text-light"
            placeholder="title"
          />
          <label className="text-secondary">Title</label>
        </div>

        {/* price */}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            type="text"
            className="form-control bg-dark text-light"
            placeholder="price"
          />
          <label className="text-secondary">Price</label>
        </div>

        {/* Release Year */}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setForm({ ...form, release: e.target.value })}
            type="text"
            className="form-control bg-dark text-light"
            placeholder="release"
          />
          <label className="text-secondary">Release Year</label>
        </div>

        {/* Rating */}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            type="text"
            className="form-control bg-dark text-light"
            placeholder="rating"
          />
          <label className="text-secondary">Rating</label>
        </div>

        {/* Description */}
        <div className="form-floating mb-3">
          <textarea
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            className="form-control bg-dark text-light"
          ></textarea>
          <label className="text-secondary">Description</label>
        </div>

        {/* Genres */}
        <div className="form-check">
          {genres.map((genre) => {
            // const id = genre;
            return (
              <div className="form-check form-check-inline mb-3">
                <input
                  type="checkbox"
                  value={genre.id}
                  checked={form.genres.includes(genre.id)}
                  onChange={handleChange}
                />
                <label key={genre.id}>{genre.name}</label>
              </div>
            );
          })}
        </div>
        <div className="form-floating mb-3">
          <input 
          onChange={(e) => setForm({...form, image: e.target.files[0]})}
          className="form-control-lg bg-dark" 
          type="file" />
          <label className="text-secondary"></label>
        </div>
        <button
          onClick={() => submitHandler()}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
