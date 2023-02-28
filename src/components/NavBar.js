import "../style/navbar.css";
import {BiSearch} from 'react-icons/bi'
import {RiEnglishInput} from 'react-icons/ri'

const NavBar = () => {
  return (
    <>
    <nav>
        <h2>Movie</h2>
     <div className="icon">   <p >{<BiSearch className="bi-search"/>}</p> </div>
        <div className="icon-two"><p>{<RiEnglishInput className="ri-english-input"/>}</p></div>   
    </nav>    
</>
  )
}

export default NavBar
