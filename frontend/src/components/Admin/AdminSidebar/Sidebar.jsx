import React from 'react'
import './Sidebar.scss'
import {
  LineStyle,
  Dashboard,
  TrendingUp,
  Group,
  GroupAddSharp,
  PhotoAlbum,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    
     

    <div className="sidebar">

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              <Link to="/adminlogin/dashboard" style={{textDecoration:"none",color:'black'}}>Dashboard</Link>
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              <Link to="/adminlogin/users/add" style={{ textDecoration: "none", color: 'black' }}>Add</Link>
            </li>
            <li className="sidebarListItem">
              <PhotoAlbum className="sidebarIcon" />
              <Link to="/adminlogin/banner" style={{ textDecoration: "none", color: 'black' }}>Banner</Link>
            </li>
            <li className="sidebarListItem">
              <PhotoAlbum className="sidebarIcon" />
              <Link to="/adminlogin/gallary" style={{ textDecoration: "none", color: 'black' }}>Gallary</Link>
            </li>

            <li className="sidebarListItem">
              <GroupAddSharp className="sidebarIcon" />{' '}
              <Link to="/adminlogin/users" style={{ textDecoration: "none", color: 'black' }}>Users</Link>
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
          <h3 className="sidebarTitle">Services</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Dashboard />
              Photography
            </li>
            <li className="sidebarListItem">
              <LineStyle />
              Catering
            </li>
            <li className="sidebarListItem">
              <Group />
              Functions
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Decor
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar
