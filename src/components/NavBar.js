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
        <h2>Movie</h2>
     <div className="icon">   <p >{searchIcon?<MdClear className="nav-bar-close" onClick={setSearchIconFunc}/>:<BiSearch className="nav-bar-search" onClick={setSearchIconFunc}/>}</p> </div>
        <div className="icon-two"><p>{<RiEnglishInput className="ri-english-input"/>}</p></div>   
    </nav> 
    {searchIcon ? <SearchBarFilter/> : ""}   
</>
  )
}

export default NavBar
