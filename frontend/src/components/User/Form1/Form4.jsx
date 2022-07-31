import React from "react";
import Header from "../Header/Header";
import { useDispatch,} from 'react-redux';
import { useNavigate,Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { addOrder, reset } from '../../../features/auth/user/orderSlice'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Typography from '@mui/material/Typography';
import { Container } from "@material-ui/core";
import {form4} from '../../../features/auth/user/orderSlice'
export default function Form4() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Data, setData] = React.useState({
        catering: ""
    })


    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(form4(Data))
        navigate("/Form5")

    }
  return (
      <div>
          <Header />

          <div className="order">
              <h3 className="photo-out-head mt-5">
                  <div className="col-full my-5">
                      <div className="col-half">
                          Catering
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
        name: "pre-wedding",
        price: 100000,
        image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Wedding-day",
        price: 200000,
        image:"https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "pre-wedding",
        price: 100000,
        image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

]

