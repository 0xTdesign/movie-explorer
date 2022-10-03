import "./reset.css";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [movie, setmovie] = useState({});
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
    setmovie(res.data);
  };

  return (
    <div className="App">
      <Header />
      <Main handleChange={handleChange} getMovie={getMovie} movie={movie} />
      <Footer />
    </div>
  );
}

export default App;
