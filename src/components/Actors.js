import React from 'react';
import { actors } from '../data';

const movies = (actor) => actor.movies.map((movie, index)=> <li key={index}>{movie}</li>)

const list = actors.map((actor, index)=>{
  return(
    <div className="actor" key={index}>
      <h3>Name:{actor.name}</h3>
        <ul>
          { movies(actor) }
        </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {list}
    </div>
  );
};

export default Actors;
