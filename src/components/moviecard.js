import React from 'react'
import '../styles/moviecard.css'
/**
 * Title: "Avatar",
    Year: "2009",
    imdbID: "tt0499549",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
 */

export default function MovieCard({movie}) {
  return (
        <div className='moviecard'>
            <img src={movie.Poster} alt={movie.Title} className="cardimg"/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
  )
}
