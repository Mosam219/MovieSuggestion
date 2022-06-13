import React from "react";
import axios from "axios";
import "./App.css";
import {
  NavBar,
  MovieList,
  NoMoviesFound,
  SearchMovie,
  MovieDetails,
} from "./components/index.js";
import { Route, Routes, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://www.omdbapi.com";

export default function App() {
  const navigator = useNavigate();
  const [inputName, setInputName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const search = async (e) => {
    if (e.code === "Enter") {
      setMovies([]);
      //https://www.omdbapi.com/?s=avatar&apikey=aa660442
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputName + "&apikey=aa660442"
      );
      if (response.data.Response == "True") {
        setMovies(response.data.Search);
        navigator("/movies");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <NavBar
        inputName={inputName}
        setInputName={setInputName}
        search={search}
      />
      {
        <Routes>
          <Route exact path="/" element={<SearchMovie />}></Route>
          <Route
            path="/movies"
            element={<MovieList movies={movies} isLoading={isLoading} />}
          ></Route>
          <Route path="/movies/:imdbID" element={<MovieDetails />}></Route>
        </Routes>
      }
    </div>
  );
}
