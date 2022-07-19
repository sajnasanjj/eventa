import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
import './ServiceDetails.scss'
import {
    LineStyle,
    Dashboard,
    TrendingUp,
    Group,
   
} from '@material-ui/icons'
import { Link,Outlet } from 'react-router-dom'
function ServiceDetails () {
  return (
    <>
    <Header/>
     <div className="mainn">
              <div className="sidebar">

                  <div className="sidebarWrapper">
                      <div className="sidebarMenu">
                          <h3 className="sidebarTitle">Services</h3>
                          <ul className="sidebarList">
                              <li className="sidebarListItem">
                                  <Dashboard />
                                  <Link to="">Photography</Link>
                              </li>
                              <li className="sidebarListItem">
                                  <LineStyle />
                                  <Link to="catering_user">Catering</Link>
                              </li>
                              <li className="sidebarListItem">
                                  <Group />
                                  <Link to="decorations">Decoration</Link>
                              </li>
                              <li className="sidebarListItem">
                                  <TrendingUp />
                                  Decor
                              </li>
                          </ul>
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
