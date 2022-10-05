import React from "react";
import "./Main.css";

export default function Main({ handleChange, getMovie, movies, showerror }) {
  return (
    <main className="Main">
      {/* <form onSubmit={getMovie}>
        <input onChange={handleChange} name="title" placeholder="Name of Movie" type="text" />
        <button type="submit">Explore</button>
      </form> */}
      {showerror && <p className="error">That is not a valid moive title</p>}
      {movies.map((movie, index) => {
        return (
          <div className="movie">
            <div className="movie-container" key={index}>
              <div className="img-container">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <div className="wrap">
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
                <p>{movie.Actors}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
