import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { logout, reset } from '../../features/auth/authSlice'
function Header() {
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="Logo">
              Event{''}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Subnav">
                
               
              
              
              <NavDropdown title={user ? (user.name) : <h6> </h6>} id="basic-nav-dropdown">
               
                <NavDropdown.Item>
                  <Link to="/checklist" className="Sub-nav">
                    Checklist
                  </Link>
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action/3.3">
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/profile" className="Sub-nav">
                  <FaUser /> Profile
                </Link>
              </Nav.Link>

              <Nav.Link>
                {user ? (<button className="Sub-nav" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>) : (
                  <Link to="/logins" className="Sub-nav">
                     <FaSignInAlt/> Login
                  </Link>
                )}


              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
