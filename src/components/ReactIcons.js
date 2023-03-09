import { AiFillHeart, AiFillDatabase} from 'react-icons/ai'
import {BsFillBookmarkFill,BsStarFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import "../style/moviedetails.css"
import CircularProgressWidget from '../widgets/CircularProgressWidget'
import { changeListIcon, changeBookMarkIcon, changeFavoriteIcon, changeStarIcon } from '../redux/iconsSlice'

const ReactIcons = ({percentage}) => {
  
  
    const selector = useSelector((state) => state.icons.reactIcons)
    const dispatch = useDispatch()

  return (
    <>
    <div className='icon-row'>
        <CircularProgressWidget height={65} width={65} percentage={percentage}/>
        <h3>User Score</h3>
        <div onClick={() => { dispatch(changeListIcon()) }} className='icon-container'> <AiFillDatabase className='fav'  style={{ color:`${selector.listIcon ? "red" : "white"} `}} /> </div>
        <div onClick={() => { dispatch(changeBookMarkIcon()) }} className='icon-container'> <BsFillBookmarkFill className='fav'  style={{ color:`${selector.bookMarkIcon ? "red" : "white"} `}} /> </div>
        <div onClick={() => { dispatch(changeFavoriteIcon()) }}  className='icon-container'> <AiFillHeart className='fav'  style={{ color:`${selector.favoriteIcon ? "red" : "white"} `}} /> </div>
        <div onClick={() => { dispatch(changeStarIcon()) }} className='icon-container'> <BsStarFill className='fav'  style={{ color:`${selector.starIcon ? "red" : "white"} `}} /> </div>
        
    </div>
   
  </>
  )
}

export default ReactIcons




