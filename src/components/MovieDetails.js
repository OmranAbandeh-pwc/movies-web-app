import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../style/moviedetails.css"
import ReactIcons from './ReactIcons'

const MovieDetails = () => {

  const {id} = useParams()
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true)
      const moviesFormer = await fetchApi()
      setMovies(moviesFormer)
      setIsLoading(false)  
    }
    getMovies()   

    
  }, [])
 
  const fetchApi = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8d93590a0dee93ef264a94b3755603f8`, requestOptions)
    const data = await response.json()
    return data;
  }
 
  return (
    <>{isLoading ? "...Loading" :
    <div className='movie-background-container' style={{backgroundRepeat:"no-repeat",backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)) , url(https://image.tmdb.org/t/p/w500${movies.backdrop_path})`}}>
      <div className='movie-container' >
        <div className='movie-image'>
            <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
        </div>
        <div className='movie-info' >
          <h1>{movies.title}<span className='year'>(2022)</span></h1>
          <ul>
            <li>{movies.release_date}</li>
            <li>. Drama</li>
            <li>. 1h 57m</li>
          </ul>
          <ReactIcons/>
          <h3>Overview</h3>
          <p className='description'>{movies.overview}</p>
          <div className='team-info'>
            <div>
              <h4 className='team-names'>Darren Aronofsky</h4>
              <p >Director</p>
            </div>
            <div>
              <h4 className='team-names'>Darren Aronofsky</h4>
              <p >Screenplay</p>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export default MovieDetails
