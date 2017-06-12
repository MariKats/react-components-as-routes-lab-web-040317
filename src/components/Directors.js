import React from 'react';
import { directors } from '../data';

const movies = (director) => director.movies.map((movie, index) => <li key={index}>{movie}</li>)

const list = directors.map((director, index)=>{
  return(
    <div className="director" key={index}>
      <h3>Name:{director.name}</h3>
        <ul>
          { movies(director) }
        </ul>
    </div>
  )
})


const Directors = () => {
  return (
      <div>
        <h1>Directors Page</h1>
        {list}
      </div>
    );
  }

export default Directors
