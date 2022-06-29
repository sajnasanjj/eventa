import React from "react";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
function Carousal() {
  return (
      <div style={{ display: 'block', width: 1000, paddingLeft:400}}>
          <Carousel>
              <Carousel.Item interval={1000}>
                  <img
                      className="d-block w-100" width={600} height={450}
                      src="https://images.pexels.com/photos/4091280/pexels-photo-4091280.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt=""
                  />
                  <Carousel.Caption>
                      <h3>Label for first slide</h3>
                      <p>Sample Text for Image One</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                  <img
                      className="d-block w-100" width={600} height={450}
                      src="https://images.pexels.com/photos/4364784/pexels-photo-4364784.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                  />
                  <Carousel.Caption>
                      <h3>Label for second slide</h3>
                      <p>Sample Text for Image Two</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
  )
}



export default Carousal;
