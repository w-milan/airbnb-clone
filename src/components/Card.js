import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={require(`../images/${props.img}`)} className="card-image" alt='' />
      <div className="card--stats">
          <img src={require('../images/star.png')} className="card-star" alt=''/>
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card