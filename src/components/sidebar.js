import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
  const card = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h5" component="div">
          About
        </Typography>
        
        <Typography variant="body2">
        Etiam odio nulla, ultrices at imperdiet nec, elementum in<br/>
         erat. Aliquam tincidunt fermentum gravida. Morbi in felis ante.<br/>
          Vivamus cursus
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );

function Sidebar() {
  return (
    <div>
    <br/>
    <br/>
        <Box sx={{ minWidth: 275 }}>
      <Card  variant="outlined">{card}</Card>
    </Box>
    <br/>
    <h3>Archives</h3>
    <ul>
        <li><a href='#'>March 2020</a></li>
        <li><a href='#'>February 2020</a></li>
        <li><a href='#'>January 2020</a></li>
        <li><a href='#'>November 1999</a></li>
        <li><a href='#'>October 1999</a></li>
        <li><a href='#'>January 2020</a></li>
        <li><a href='#'>May 2009</a></li>
        <li><a href='#'>July 1999</a></li>
        <li><a href='#'>October 1999</a></li>
        <li><a href='#'>April 2020</a></li>
        <li><a href='#'>December 2022</a></li>
    </ul>
    <br/>
    <h3> Social</h3>
    <ul>
        <li><GitHubIcon/> <a href='#'>github</a></li>
        <li><FacebookIcon/> <a href='#'>facebook</a></li>
        <li><TwitterIcon/> <a href='#'>twitter</a></li>
    </ul>
</div>
  )
}

export default Sidebar