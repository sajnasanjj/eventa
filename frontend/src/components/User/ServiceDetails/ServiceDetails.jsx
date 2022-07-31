import React from "react";
import Header from "../Header/Header";
import './ServiceDetails.scss'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'; 
import { Link,Outlet } from 'react-router-dom'
function ServiceDetails () {
  return (
    <>
    <Header/>
     <div className="mainn">
              <div className="sidebar">

                  <div className="sidebarWrapper">
                      <div className="sidebarMenu">
                          <h3><Link to="/photos"><ArrowCircleLeftOutlinedIcon/></Link></h3>
                      </div>
                  </div>
              </div>
              <div class="outlinebody">
                 <Outlet/>
              </div>
    </div>
          
  </>
  );
}

export default ServiceDetails;
