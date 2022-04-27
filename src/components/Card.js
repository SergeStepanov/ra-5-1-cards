import React from 'react'
import BtnLink from './BtnLink';


function Card({ children, img }) {
  // const img =
  //   'https://wallbox.ru/resize/800x480/wallpapers/main/201442/31a75310d955b1e.jpg';

  return (
    <div className='card' style={{ width: 18 + 'rem' }}>
      {img && <img src={img} className='card-img-top' alt='...' />}
      <div className='card-body'>
        {children}
        <BtnLink href='#0'>Go somewhere</BtnLink>
      </div>
    </div>
  );
}

export default Card