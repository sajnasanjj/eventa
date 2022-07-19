import * as React from 'react'
import { useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import { register, reset } from '../../../features/auth/authSlice'
import Spinner from '../../../components/Spinner/Spinner'
import {toast} from 'react-toastify'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
// import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'

const theme = createTheme()
export default function Register() {
  const [formData,setFormData] = useState({
    name:'',email:'',password:'',password2:'',
  })
  const { name,email,password,password2 } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )
  useEffect(()=>{
     if(isError){
      toast.error(message) 
     }   
     if(isSuccess || user){
      navigate('/')
     }
     dispatch(reset())
  },[user,isLoading,isError,isSuccess,message,navigate,dispatch])
  const onChange = (event) => {
     setFormData((prevState) => ({
      ...prevState,
      [event.target.name]:event.target.value
     }))
  }
  const onSubmit = (event) => {
    event.preventDefault()

    if(password !== password2){
      toast.error('Passwords do not match')
    }else{
       const userData = {
        name, email, password
       }
       dispatch(register(userData))
    }
    const data = new FormData(event.currentTarget)
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    })
  }
  if(isLoading){
    return <Spinner/>
  }
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '60vh',padding:'70px 140px', }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHBsYW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize:'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={9}
            square
          >
            <Box
              sx={{
                my: 3,
                mx: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h5><FaUser />
                Eventa Wedding Plannar
              </h5>
             
              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Username"
                  name="name"
                  value={name}
                  onChange={onChange}
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm - password"
                  type="password2"
                  id="password2"
                  value={password2}
                  onChange={onChange}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/logins" sx={{cursor:"pointer"}}>
                      Already have an Account? Login
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  )
}

