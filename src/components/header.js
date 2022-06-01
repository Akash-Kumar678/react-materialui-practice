import React from 'react'
import {Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {
  return (
   
    <div class="row">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 navhead ">
      SUBSCRIBE
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 navblog">
      <h2><b>Blog</b></h2>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 navsearch" >
      <SearchIcon/>
      <Button variant="outlined">SIGN UP</Button>
    </div>
  </div>
        
   
  )
}
