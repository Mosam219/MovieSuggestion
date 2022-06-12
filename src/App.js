import React from 'react';
import axios from 'axios';
import './App.css';
import {NavBar,MovieList,NoMoviesFound,SearchMovie} from './components/index.js';


const API_BASE_URL = "https://www.omdbapi.com";

export default function App() {

  const [inputName,setInputName] = React.useState('');
  const [movies,setMovies] = React.useState([]);
  const search = async(e) => {
    if(e.code==='Enter'){
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputName + "&apikey=aa660442"
      );
      if(response.data.Response=="True")
        setMovies(response.data.Search);
      else setMovies([-1]);
    }
  }

  return (
    <div className="App">
      <NavBar inputName={inputName} setInputName={setInputName} search={search}/>
      {
        movies.length==0 ?
          <SearchMovie />
        :
        (movies[0]!=-1 ?
          <MovieList movies={movies}/>
          :
          <NoMoviesFound/>)
      }
    </div>
  );
}