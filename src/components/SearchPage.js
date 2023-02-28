import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "../style/searchpage.css"
import SearchBarFilter from "./SearchBarFilter"

const SearchPage = () => {

  const [searchedMovies, setSearchedMovies] = useState([])
  const {query} = useParams()

  //---------------------------------------------


  //---------------------------------------------

  useEffect(() => {
    const getMovies = async () => {
     
      const moviesFormer = await fetchSearchedApi()
      setSearchedMovies(moviesFormer.results)
      
    }
    getMovies()   

  }, [])
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const fetchSearchedApi = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8d93590a0dee93ef264a94b3755603f8`, requestOptions)
    const data = await response.json()
    return data;
  }
  

  return (
    <>
    <SearchBarFilter/>
    
    
    <div className="main-container-searchpage">
        
      {searchedMovies.map((movie) => (<Link key={movie.id}  to={`/detailspage/${movie.id}`} className="searched-card-link"><div className="searched-card" >
        <div className="image-container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        </div>
        <div className="moive-info-container">
            <div className="movie-searched-name">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
            <div className="movie-searched-description">
            {movie.overview}
            </div>
        </div>
      </div></Link>))}
  
    </div>
    </>
  )
}

export default SearchPage
