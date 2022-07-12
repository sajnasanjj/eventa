import React from "react";
import Header from "../Header/Header";
import './About.scss'
import { Button } from "@material-ui/core";

function About() {
  return (
    <>
    <Header/>
   
    <div className="col-md-8 about">
       <h1>Welcome to Eventa</h1>
       <h5>Bringing imagination to Reality</h5>
              <p>Our dedicated team weaves dreams, emotions, relations and responsibilities.<br/>
                 Our presence has now become global as we have fulfilled the dreams of many individuals, corporate and families. The inspiration of our team is customer’s desires and their responsibilities. <br/> We, Eventa Events Management Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis incidunt amet nisi aliquid quibusdam. Fuga, ullam nisi. Reiciendis, fuga voluptate.<br/> Quasi exercitationem, voluptatem explicabo nobis distinctio quisquam reiciendis sunt ducimus. are specialized in offering complete service for weddings, seminars and events. We know and understand your responsibility and let you transfer it onto our shoulder, <br/>as we plan and arrange, venue booking, decide on the menu, conceives themes, consider the neighborliness and many more.</p>    
          <Button>Contact us</Button>
    </div>
          <h2 className="about">Our Team Members</h2>

    <div className="container">
              <div className="member-details"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxjRZeZkUi__dbo7qlh3_hL-OUiyC7WwWcA&usqp=CAU" alt="" className="member" /> 
              <h5>Founder</h5>
              <h6>Asif Ali</h6>
              </div>
              <div className="member-details"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxjRZeZkUi__dbo7qlh3_hL-OUiyC7WwWcA&usqp=CAU" alt="" className="member" />
                  <h5>Founder</h5>
                  <h6>Asif Ali</h6></div>
              <div className="member-details"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxjRZeZkUi__dbo7qlh3_hL-OUiyC7WwWcA&usqp=CAU" alt="" className="member" />
                  <h5>Founder</h5>
                  <h6>Asif Ali</h6></div>
             
          </div>
    </>
  );
}

export default About;
