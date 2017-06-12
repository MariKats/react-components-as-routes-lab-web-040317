import React from 'react';
import { movies } from '../data';

const genres = (movie) => movie.genres.map((genre, index) => <li key={index}>{genre}</li>)

const list = movies.map((movie, index)=>{
  return(
    <div className="movie" key={index}>
      <h3>Name:{movie.title}</h3>
      <p>Time:{movie.time}</p>
      <p>Genres:</p>
        <ul>
          { genres(movie) }
        </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {list}
    </div>
  );
};

export default Movies;
