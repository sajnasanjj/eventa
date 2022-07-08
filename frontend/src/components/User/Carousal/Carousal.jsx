import React from "react";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from "../Header/Header";
function Carousal() {
    
  return (
      <div>
          <Header />
      <div style={{ display: 'block', width: '600'}}>
          <Carousel>
              <Carousel.Item interval={1000}>
                  <img
                      className="d-block" width={600} height={500}
                      src="https://images.pexels.com/photos/4091280/pexels-photo-4091280.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt=""
                  />
                  <Carousel.Caption>
                      <h3>Our Services</h3>
                      <p>Sample Text for Image One</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                  <img
                      className="d-block" width={600} height={500}
                          src="https://images.pexels.com/photos/8926471/pexels-photo-8926471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                  />
                  <Carousel.Caption >
                      <h3>Event</h3>
                      <p>Contact us</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
          </div>
             
  )
}



export default Carousal;
