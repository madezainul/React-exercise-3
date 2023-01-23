import React, { useState, useEffect } from "react";
import { getMovies } from "../axios/movieAxios";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //cb dari axios movies
    // getMovies(result => console.log(result))
    getMovies((result) => setMovies(result));
  }, []);

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => {
            const { id, title, price } = movie;
            return (
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="img-card-top"
                    src="https://via.placeholder.com/150"
                  />
                  <div className="card-body p-3">
                    <div className="text-center">
                      <h5 className="fw-bolder">{title}</h5>
                      <hr />
                      <p>rating</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Error</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
