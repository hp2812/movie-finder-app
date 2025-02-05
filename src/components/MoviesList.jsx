import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import MovieCard from './MovieCard';

const MoviesList = () => {
    const {movies,loading} = useContext(AppContext);
    if(loading) return <p className='text-center'>Loading.........</p>




  return (
    <div className='rid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {movies.length >0 ? movies.map((movie)=>
                        <MovieCard key={movie.imdbID} movie={movie } />)
                        :
                       ( <p className="text-center col-span-full">No movies found.</p>)
        }

      
    </div>
  )
}

export default MoviesList
