import React from "react";
import "./Main.css";

export default function Main({ handleChange, getMovie, movie }) {
  return (
    <main className="Main">
      <form onSubmit={getMovie}>
        <input onChange={handleChange} name="title" placeholder="Name of Movie" type="text" />
        <button>Explore</button>
      </form>
      <img src={movie.Poster} alt={movie.Title} />
    </main>
  );
}
