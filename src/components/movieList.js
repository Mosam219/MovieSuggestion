import React from 'react'
import MovieCard  from './moviecard'
import '../styles/movieList.css'
export default function movieList({movies}) {
  return (
    <div className='movieList'>
      
      {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>)}
    </div>
  )
}
