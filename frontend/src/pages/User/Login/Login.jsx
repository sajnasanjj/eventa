import * as React from 'react'
import './Login.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
// import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login, reset } from '../../../features/auth/authSlice'
import { toast } from 'react-toastify'
const theme = createTheme()
export default function Login() {
  const [formData, setFormData] = useState({
    email: '', password: ''
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
      console.log(message);
    }
    if (isSuccess || user) {
      navigate('/photos')
    }
    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }
  console.log("asdfghj", email)

  return (
    <div >
      <Container >

        <ThemeProvider theme={theme}  >

          <Grid container component="main" sx={{ height: '70vh', padding: '90px 150Px' }} >
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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}

            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h5>
                  Wedeve
                </h5>
                {/* <Typography component="h1" variant="h5">
                  <FaUser /> Login
                </Typography> */}

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
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={onChange}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
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

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
                  </Button>
                  <Grid container>

                    <Grid item>
                      <Link to="/register" variant="body2" sx={{ alignItems: 'center' }}>
                        {"Don't have an accout ? Signup"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

          </Grid>

        </ThemeProvider>
      </Container>
    </div>
  )
}


