import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/body.css";
import Card from './Card';
import Footer from './Footer';
import { useEffect } from 'react';
import NavBar from './NavBar';
import "../style/searchbarstyle.css"
import Selector from "./Selector"


const Body = () => {
  const [query, setQuery] = useState()
  let [thisDay] = useState(true)
  let [thisWeek] = useState(false)
  const [switcher, setSwitcher] = useState(true)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const getMovies = async () => {
    setIsLoading(true)
    if(thisDay){
      const moviesFormer = await fetchDayApi()
      setMovies(moviesFormer.results)
      setIsLoading(false)
  
    }else if(thisWeek){
    const moviesFormer = await fetchWeekApi()
    setMovies(moviesFormer.results)
    setIsLoading(false)
  
  }
}
  useEffect(() => {
    getMovies()   
  }, [])

  const fetchDayApi = async () => {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c43d9d587e46f628e40146067ece7b86", requestOptions)
    const data = await response.json()
    return data;
  }
  const fetchWeekApi = async () => {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=c43d9d587e46f628e40146067ece7b86", requestOptions)
    const data = await response.json()
    return data;
  }
  
 const setWeek = () => {
  setSwitcher(false)
  thisWeek = true
  thisDay=false
  getMovies() 
 }
 const setDay = () => {
  setSwitcher(true)
  thisWeek = false
  thisDay=true
  getMovies() 
 }


  return (
    <>
    <NavBar/>
    <div className='main-body-container'>{ 
      <div className="main-searchbar-container" style={{backgroundAttachment:"fixed",backgroundSize:"cover", backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)) , url(https://image.tmdb.org/t/p/w500/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg)`}}>
            <div className="welcome-container">
              
                <h1>Welcome.</h1>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
          <div className="search-bar">
            <input type="text" placeholder="search here" onChange={(e) => setQuery(e.target.value)}/>
            <Link to={`/searchpage/${query}`}><button >search</button></Link>
          </div>
        </div>
            }
            <div className='selector-main-container'><div className="trending">Trending</div><Selector dayFun={setDay} weekFun={setWeek} today={switcher} thisweek={!switcher}/></div>
        <div className='movie-container'> 
        
          <div className='card-movie-container'>
            
            {isLoading ?<div>empty</div> :<Card items={movies} />}
            
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Body

//style={{backgroundAttachment:"fixed",backgroundSize:"cover", backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)) , url(https://image.tmdb.org/t/p/w500${movies[1].backdrop_path})`}}