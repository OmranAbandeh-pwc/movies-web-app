import React, { useState } from 'react'
import "../style/selector.css"
const Selector = ({today, thisweek, dayFun, weekFun}) => {
   
    
  return (
    <>
    <div className="selector-container">
		<button onClick={dayFun}  className={today?`left-selector-on`:`left-selector-off`}>Today</button>
        <button onClick={weekFun} className={thisweek?`right-selector-on`:`right-selector-off`}>This Week</button>
	</div>
    </>
  )
}

export default Selector
