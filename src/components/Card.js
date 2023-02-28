import "../style/card.css"
import {CircularProgressbar, buildStyles} from  "react-circular-progressbar"
import { Link } from "react-router-dom";

const Card = ({items}) => {
  const imageUrl = "";
    
  return (<>
  {items.map((item) => (<Link key={item.id}  to={`/detailspage/${item.id}`} className="card-link"> <div className="card" >
      <div className="image-container">
        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
      </div>
      <div className="circular-progressbar">
      <div className="w-10 absolute top-[13rem] left-2">
        <CircularProgressbar
          value={(Number(item.vote_average * 10))}
          text={`${item.vote_average * 10}%`}
          background
          backgroundPadding={3}
          styles={buildStyles({
            backgroundColor: "rgba(0,0,0,0.9)",
            textSize: '2rem',
            textColor: "white",
            pathColor: "red",
            trailColor: "transparent"
          })}
        />
      </div>
      </div>
      <div className="info">
        <h3 className="title">{item.title}</h3>
        <p className="date">{item.release_date}</p>
      </div>
      
    </div></Link>))
    
}</>)
}

export default Card
