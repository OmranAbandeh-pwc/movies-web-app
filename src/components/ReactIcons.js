import React, { useState } from 'react'
import {FaBeer, AiFillHeart, AiFillDatabase} from 'react-icons/ai'
import {BsFillBookmarkFill,BsStarFill} from 'react-icons/bs'
import "../style/moviedetails.css"
import CircularProgressWidget from '../widgets/CircularProgressWidget'

const ReactIcons = ({percentage}) => {
    const [listBool, setListBool] = useState(false)
    const [bookmarkBool, setBookmarkBool] = useState(false)
    const [favBool, setFavBool] = useState(false)
    const [starBool, setStarBool] = useState(false)
    
    const setLis = () => {
        if(favBool){
            setListBool(!listBool)
        }else{
            setListBool(!listBool)
        }
    }
    const isBookmark = () => {
        if(favBool){
            setBookmarkBool(!bookmarkBool)
        }else{
            setBookmarkBool(!bookmarkBool)
        }
    }
    const isFav = () => {
        if(favBool){
            setFavBool(!favBool)
        }else{
            setFavBool(!favBool)
        }
    }
    const setStar = () => {
        if(favBool){
            setStarBool(!starBool)
        }else{
            setStarBool(!starBool)
        }
    }
  return (
    <>
    <div className='icon-row'>
        <CircularProgressWidget height={65} width={65} percentage={percentage}/>
        <h3>User Score</h3>
        <div onClick={setLis} className='icon-container'> <AiFillDatabase className='fav'  style={{ color:`${listBool ? "red" : "white"} `}} /> </div>
        <div onClick={isBookmark} className='icon-container'> <BsFillBookmarkFill className='fav'  style={{ color:`${bookmarkBool ? "red" : "white"} `}} /> </div>
        <div onClick={isFav} className='icon-container'> <AiFillHeart className='fav'  style={{ color:`${favBool ? "red" : "white"} `}} /> </div>
        <div onClick={setStar} className='icon-container'> <BsStarFill className='fav'  style={{ color:`${starBool ? "red" : "white"} `}} /> </div>
        
    </div>
   
   
  </>
  )
}

export default ReactIcons
