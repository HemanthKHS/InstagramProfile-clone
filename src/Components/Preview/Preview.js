import React from "react";
import './Preview.css'

function Preview ( {selectedimg, setSelectedimg}){

const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')){
        setSelectedimg(null)
    }
    setSelectedimg(null)
}

    return(
        <div className='Preview' onClick={handleClick}>
            <img src={selectedimg} alt='Unable to Load Preview'/>
        </div>
    )
}

export default Preview;