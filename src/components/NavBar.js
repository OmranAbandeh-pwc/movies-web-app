import "../style/navbar.css";
import {BiSearch} from 'react-icons/bi'
import {RiEnglishInput} from 'react-icons/ri'
import {MdClear} from "react-icons/md"
import SearchBarFilter from "./SearchBarFilter";
import { useState } from "react";

const NavBar = () => {
  const [searchIcon, setSearchIcon] = useState(false)

  const setSearchIconFunc = () => {
    setSearchIcon(!searchIcon)
  }
  return (
    <>
    <nav>
        <div className="nav-logo-container">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
        </div>
      
        <div className="icon">   <p >{searchIcon?<MdClear className="nav-bar-close" onClick={setSearchIconFunc}/>:<BiSearch className="nav-bar-search" onClick={setSearchIconFunc}/>}</p> </div>
        <div className="icon-two"><p>{<RiEnglishInput className="ri-english-input"/>}</p></div>  
    </nav> 
    {searchIcon ? <SearchBarFilter/> : ""}   
</>
  )
}

export default NavBar


// <div className="icon">   <p >{searchIcon?<MdClear className="nav-bar-close" onClick={setSearchIconFunc}/>:<BiSearch className="nav-bar-search" onClick={setSearchIconFunc}/>}</p> </div>
// <div className="icon-two"><p>{<RiEnglishInput className="ri-english-input"/>}</p></div>  