import React from "react";
import MovieCard from "./MovieCard";



const Movielist = ({ListOfMovies, handleRemove, search, ratefiltring}) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around', marginTop:'5%',alignItems:'space-between'}}>
     {search || ratefiltring ?
     ListOfMovies.filter(
          (movie) =>
            movie.Title.toLowerCase().includes(search.toLowerCase()) &&
            movie.rate.value >= ratefiltring
        ).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleRemove={handleRemove}
          />
        )): ListOfMovies.map((movie)=>(<MovieCard key={movie.id} movie={movie} handleRemove={handleRemove} />))
      }
        </div>
  );
}
   


export default Movielist;



