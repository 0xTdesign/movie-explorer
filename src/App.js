import "./reset.css";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [review, setreview] = useState("");
  const [showerror, setshowerror] = useState(false);
  const [movies, setmovies] = useState([]);
  const [form, setform] = useState({
    title: "",
    plot: "",
    poster: "",
    actors: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const getMovie = async (e) => {
    e.preventDefault();
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${form.title}`;
    const res = await axios.get(API);

    if (res.data.Error !== "Movie not found!") {
      const tempMovies = [...movies]; // copy of movies state variable becasuse state cant be mutated.
      tempMovies.unshift(res.data); // Unshift add to the start of the array

      console.log(res.data);

      if (tempMovies.length > 3) {
        tempMovies.pop(); // Removing the first one to allow for a new movie.
      }
      setshowerror(false);
      setmovies(tempMovies);
      //check if movie is in Favourites
      const API2 = `http://localhost:8080/favourites?title=${res.data.Title}`;
      const res2 = await axios.get(API2);
      console.log(res2);
      setreview(res2.data.Review);
      console.log(res2.data.Review);
    } else {
      setshowerror(true);
    }
  };

  return (
    <div className="App">
      <Header handleChange={handleChange} getMovie={getMovie} />
      <Main movies={movies} showerror={showerror} review={review} />
      <Footer />
    </div>
  );
}

export default App;
