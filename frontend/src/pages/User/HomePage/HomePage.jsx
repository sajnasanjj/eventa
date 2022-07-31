import {useState} from 'react'
import { Button} from "@material-ui/core";
import {  Mail, Phone } from "@material-ui/icons";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import React from "react";
import { Link } from 'react-router-dom' 
import Carousal from '../../../components/User/Carousal/Carousal'
import Header from "../../../components/User/Header/Header";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './HomePage.scss'
import { Rating } from '@mui/material';
import Services from '../../../components/User/Services/Services';
import Photos from '../../../components/User/Photos/Photos'
import { Container } from '@mui/system';
function HomePage() {
  
  const [openDate,setOpenDate] = useState(false)
  const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  return(    
     <>
    <Header/>
    <div className="containerrr">
        <Carousal />
      <div className="address">
        <div className="left mb-5" >
            <h3>Wedeve Event Plannar</h3>
            <h6>Ernakulam,Kerala <span>(View map)</span></h6><br />
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <p><Phone /><a href="tel:+918891873123">+91 8891873123</a><Mail /> <a className="mail" href="mailto:azariaeventa@gmail.com">azariaeventa@gmail.com</a></p>
        </div>
          <div className="right">
            <Button onClick={()=>setOpenDate(!openDate)} className="button">Check Availability<CalendarMonthTwoToneIcon/>
            </Button>
            <Button class="enquire"><Link to="enquire" class="Link"><p className="now">Confirm Now</p>
            </Link></Button>

            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}
          </div>
          
      </div>

    </div>
    <Container clasName="services-box my-5">
        <Services />
    </Container>
    <Photos/>
    
    
   </>
  );
}

export default HomePage;
