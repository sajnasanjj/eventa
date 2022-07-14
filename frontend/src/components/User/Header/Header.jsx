// import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import './Header.scss'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout, reset } from '../../../features/auth/authSlice'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        
        <AppBar position="static" sx={{backgroundColor:'black'}}>
          <Toolbar>
           
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: 'white'}}>
              <Link to="/" className="Logo">
                Event{''}
              </Link>
            </Typography>
            <Typography>
            <Link to = "/about" className='About'>About</Link>
              <Link to="/about" className='About'>Contact</Link>

            </Typography>
            {auth && (
              <div>
                {user ? (user.name) : <h6> </h6>} 

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  {user ? <MenuItem onClick={onLogout} >Logout</MenuItem> : <MenuItem ><Link to="/logins" className="Sub=Nav">
                   Login
                  </Link></MenuItem>}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
         
            
    </div>
  )
}

export default Header
