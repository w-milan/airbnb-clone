import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <img src={require('../images/katie-zaferes.png')} className="card-image" alt='' />
      <div className="card--stats">
          <img src={require('../images/star.png')} className="card-star" alt=''/>
          <span>5.0</span>
          <span className='gray'>(6) • </span>
          <span className='gray'>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}

export default Card