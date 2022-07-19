import React from "react";
import './Photos.scss'
// import Album from "../../../components/User/Album/Album";
// import GallaryUser from "../../../components/User/GallaryUser/GallaryUser";
import {NavLink,Outlet} from 'react-router-dom'
import { Typography } from "@mui/material";
function Photos() {
  return (
    <>
          <div className="SubHeading">
              <NavLink to="" className="name">Gallary</NavLink>
              <Typography className="Line"> | </Typography>
              <NavLink to="album" className="name">Albums</NavLink>
              <Typography className="Line"> | </Typography>
              <NavLink to="review" className="name">Review</NavLink>

          </div>
          
         <div>
           <Outlet />
         </div>

    </>
  )
  ;
}

export default Photos;
