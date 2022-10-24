import React from 'react'

const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={require(`../images/${props.img}`)} className="card-image" alt='' />
      <div className="card-stats">
          <img src={require('../images/star.png')} className="card-star" alt=''/>
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p><span className="card-price bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card