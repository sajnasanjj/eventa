import React,{useEffect} from "react";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "@material-ui/core";
import {useSelector,useDispatch} from 'react-redux';

// import { toast } from 'react-toastify'
// import { reset } from '../../../features/auth/admin/banner/bannerSlice'

import { getBanner } from "../../../features/auth/admin/banner/bannerSlice";


function Carousal() {
  const dispatch = useDispatch();
  const { banners} = useSelector((state) => state.getbannerr);

  useEffect(() => {
    dispatch(getBanner())
  },[dispatch,banners]);

 
  console.log("sdfg",banners)
 

console.log("This is the banner",banners)
  return (
      <div>
      <div style={{ display: 'block', width: '1500'}}>
          
          <Carousel>
          {banners.map((input) => (

              <Carousel.Item interval={1000}>
            <img
              className="d-block" height={500} width={1500}
              src={input.image}
              alt=""
            /> 

            <Carousel.Caption style={{ color: "black" }}>
                        <h3>
                             {input.name}
                        </h3>
                     
                       <Button>Enquire Now</Button>
                  </Carousel.Caption>
              </Carousel.Item>
          ))}

          </Carousel>
      </div>
          </div>
             
  )
}



export default Carousal;
