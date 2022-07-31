import React from "react";
import Header from "../Header/Header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ArrowForward } from "@material-ui/icons";
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { form3 } from '../../../features/auth/user/orderSlice'
function Form3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = React.useState({
    events:""
  })

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (event) => {
    event.preventDefault()

    dispatch(form3(Data))
    navigate("/Form4")
    const data = new FormData(event.currentTarget)
    console.log({
      events: data.get('events'),
      amount: data.get('amount'),
    })
  }

  return (
    <>
    <Header/>
      <div className="order">
        <h3 className="photo-out-head mt-5">
          <div className="col-full my-5">
            <div className="col-half">
              Events
            </div>
            <div className="col-half">
              {/* <Link to="/photos/Form2" className="Link-of-Arrow"><ArrowBack /></Link> */}
              <Link to="/Form4" className="Link-of-Arrow"><ArrowForward/></Link>
            </div>
          </div>
        </h3>
        <form action="" className="form-block" onSubmit={onSubmit}>

        <Container className="cont">
          <div className="photo-out mt-5">
              {itemss.map((input)=>(
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
                    <Button size="large" class="chooseButton" onChange={onChange}>CHOOSE</Button>
                  </CardActions>
                </Card>
                </div>
              ))}
          </div>
         </Container > 
        </form>
      </div>
     </>
  )
}
export default Form3;

export const itemss=[
  {
  name:"pre-wedding",
  price:100000,
  image:"https://images.pexels.com/photos/169188/pexels-photo-169188.jpeg?auto=compress&cs=tinysrgb&w=600",
},
  {
    name: "Wedding-day",
    price: 200000,
    image: "https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

