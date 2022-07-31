import React,{useEffect} from "react";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import {useSelector,useDispatch} from 'react-redux';
import { Container } from "@material-ui/core";
import './Carousal.scss'
// import { toast } from 'react-toastify'
// import { reset } from '../../../features/auth/admin/banner/bannerSlice'

import { getBanner } from "../../../features/auth/admin/banner/bannerSlice";


function Carousal() {
  const dispatch = useDispatch();
  const { banners} = useSelector((state) => state.getbannerr);

  useEffect(() => {
    dispatch(getBanner())
  },[dispatch]);

 console.log("banners",banners)
 
  return (
      <div>
      <div style={{ display: 'block', width: '1000'}}>
          
          <Carousel>
          {banners.map((input) => (

              <Carousel.Item interval={3000}>

            <img
              className="d-block" height={550} width={1500}
              src={input.image}
              alt=""
            /> 
              <Container className="bannerHead">
                <Carousel.Caption style={{ color: "Black" }} className="title-on-banner">
                  <div className="wedeve-head"><h2>Wedeve</h2>
                  
                    <h5><span> into amazing experiences</span></h5>
                 
                        <h6>EVENT MANAGEMENT COMPANY AT KOCHI</h6>
                        <h5>MAKE YOUR BOOKING VIA ONLINE</h5>
                  </div>
                  </Carousel.Caption>
              </Container>
              </Carousel.Item>
          ))}

          </Carousel>
      </div>
          </div>
             
  )
}



export default Carousal;
