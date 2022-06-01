import React from 'react'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

function Cardcontent() {
  return (
    <div>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Featured Post
        </Typography>
        <Typography gutterBottom variant="h10" component="div">
         Nov 12
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dummy text here another dummy text for large paragraph
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Continue Reading...</Button>
        
      </CardActions>
    </div>
  )
}

export default Cardcontent