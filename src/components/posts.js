import React from 'react'
import Card from '@mui/material/Card';


import Cardcontent from './cardcontent';
import Cardmedia from './cardmedia';
function Posts() {
  return (
    <div >
    <div className='row '>
    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 post1'>
    <Card className='card' sx={{ maxWidth: 545 }}>
      <Cardcontent/>
      <Cardmedia/>
      
    </Card>
    </div>
    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 post2'>
    <Card className='card' sx={{ maxWidth: 545 }}>
      
    <Cardcontent/>
      <Cardmedia/>
    </Card>
    </div>
</div>

    </div>
    
  )
}

export default Posts