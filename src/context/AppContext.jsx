import {  createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext(); //here we create the context  and export for global use 

const MovieProvider = ({children})=>{
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = "6f3895f8";
   const fetchMovies = async (searchQuery)=>{
          if(!searchQuery) return ;
          setLoading(true);
          try {
                const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=6f3895f8&s=${searchQuery}`);
                setMovies(response.data.Search )
                console.log(response.data.Search);
            
          } catch (error) {
            console.log("Error Fetching Movies", error);
            
          }
          setLoading(false);

   }
   
      return (
        <AppContext.Provider value={{movies,loading,fetchMovies}}>
            {children}
        </AppContext.Provider>
      )

    
}
export default MovieProvider;
