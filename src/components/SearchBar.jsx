import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';




const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {fetchMovies} = useContext(AppContext);
     
  
  
  const handleSearchSubmit = async (e)=>{
    e.preventDefault();
    fetchMovies(searchQuery);
    
   


  }
  return (
    <div className= ' text-white rounded w-full items-center justify-center flex-col  bg-blue-950 flex  '>
      <h1 className= 'm-10 text-3xl font-bold '>Movie House </h1>
      <form 
        onSubmit={handleSearchSubmit}
      
         className='' >
        <input value={searchQuery} 
        onChange={(e)=>{
          setSearchQuery(e.target.value);


        } }
        className='m-5 border-2 text p-1 w-80 border-white rounded-xl ' placeholder='Enter Movie Name' type="text" />
          <div className="flex justify-center items-center mb-3">
          <button className="bg-white p-1 w-9 text-center flex items-center justify-center rounded-2xl">🔍</button>
        </div>

      
      </form>

      
    </div>
  )
}

export default SearchBar
