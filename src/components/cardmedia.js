import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import banner from './images/sleep.jpg'

function Cardmedia() {
  return (
    <div>
        <CardMedia
        component="img"
        height="170"
        image={banner}
        alt="green iguana"
      />
    </div>
  )
}

export default Cardmedia