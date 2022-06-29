import * as React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminlogin, reset } from '../../../features/auth/adminAuthSlice'
import { toast } from 'react-toastify'
const theme = createTheme()
export default function Alogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { admin, isError, isSuccess, message } = useSelector(
        (state) => state.adminauth
    )
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || admin) {
            navigate('/dashboard')
        }
        dispatch(reset())
    }, [admin, isError, isSuccess, message, navigate, dispatch])
    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const adminData = {
            email,
            password
        }
        dispatch(adminlogin(adminData))
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
        console.log("addddd", email)
    }
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Grid container component="main" md={11} sx={{ height: '70vh',width: '100%',marginTop:"40px" }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={4}
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
                            <Typography component="h1" variant="h5">
                                <FaUser /> Admin
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
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
                               
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    )
}


