import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="border p-4 rounded-md m-2 shadow-md">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
      <p className="text-sm text-gray-500">{movie.Year}</p>
      <p className="text-sm text-gray-500"></p>
    </div>
  )
}

export default MovieCard
