import React from "react";
import MovieCard from "./moviecard";
import "../styles/movieList.css";
export default function movieList({ movies, isLoading }) {
  return (
    <div className="movieList">
      {isLoading && (
        <div className="loader">
          <div className="set1">
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
          <div className="set2">
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
        </div>
      )}
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
