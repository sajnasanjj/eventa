import React,{useEffect,useState} from "react";
import Header from "../Header/Header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Typography from '@mui/material/Typography';
import './Form4.scss'
import { Link,useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux';
import {form5} from '../../../features/auth/user/orderSlice'
export default function Form5() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Data, setData] = React.useState({
        photography: ""
    })


    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(form5(Data))
        navigate("/Form6")

    }
    return (
        <div>
            <Header />

            <div className="order">
                <h3 className="photo-out-head mt-5">
                    <div className="col-full my-5">
                        <div className="col-half">
                            Photography
                        </div>
                        <div className="col-half">
                            <Link to="/Form3" className="Link-of-Arrow"><ArrowBack /></Link>

                            <Link to="/Form5" className="Link-of-Arrow"><ArrowForward /></Link>
                        </div>
                    </div>
                </h3>
                <form action="" className="form-block" onSubmit={onSubmit}>

                    <Container className="cont">
                        <div className="photo-out mt-5">
                            {itemss.map((input) => (
                                <div className="col-full">

                                    <Card sx={{ maxWidth: 250 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="250"
                                            image={input.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {input.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                Lorem ipsum, dolor sit amet consectetur
                                                <h6>Rs : {input.price}</h6>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="large" class="chooseButton">CHOOSE</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Container >
                </form>
            </div>
        </div>
    );
}

export const itemss = [
    {
        name: "Photo",
        price: 100000,
        image:"https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Photo + Video",
        price: 200000,
        image:"https://images.pexels.com/photos/916361/pexels-photo-916361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

]
