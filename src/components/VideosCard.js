import React from 'react'
import "../style/VideosCard.css"

const playButton =<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8 19V5l11 7Zm2-7Zm0 3.35L15.25 12 10 8.65Z"/></svg>

const VideosCard = ({index,image,name}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>
        <a href="#/">{playButton}</a>
        <p>{name}</p>
      
    </div>
  )
}

export default VideosCard
