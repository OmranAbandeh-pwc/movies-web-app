import React, { useState } from 'react'
import {FaBeer, AiFillHeart, AiFillDatabase} from 'react-icons/ai'
import {BsFillBookmarkFill,BsStarFill} from 'react-icons/bs'
import "../style/moviedetails.css"

const ReactIcons = () => {
    const [favBool, setFavBool] = useState(false)
    
    const isFav = () => {
        if(favBool){
            setFavBool(!favBool)
        }else{
            setFavBool(!favBool)
        }
    }
  return (
    <>
    <div className='icon-row'>
        <h3>User Score</h3>
        <div onClick={isFav} className='icon-container'> <AiFillDatabase className='fav'  style={{ color:`${favBool ? "red" : "white"} `}} /> </div>
        <div onClick={isFav} className='icon-container'> <BsFillBookmarkFill className='fav'  style={{ color:`${favBool ? "red" : "white"} `}} /> </div>
        <div onClick={isFav} className='icon-container'> <AiFillHeart className='fav'  style={{ color:`${favBool ? "red" : "white"} `}} /> </div>
        <div onClick={isFav} className='icon-container'> <BsStarFill className='fav'  style={{ color:`${favBool ? "red" : "white"} `}} /> </div>
        
    </div>
   
   
  </>
  )
}

export default ReactIcons
