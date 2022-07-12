import {useState} from 'react'
import { Button } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import React from "react";
import Carousal from '../../../components/User/Carousal/Carousal'
import Gallary from "../../../components/User/Gallary/Gallary";
import Header from "../../../components/User/Header/Header";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './HomePage.scss'
function HomePage() {
  const [openDate,setOpenDate] = useState(false)
  const [date, setDate] = useState([
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
        <div className="left">
            <h3>Azaria Eventa Wedding Plannar</h3>
            <h6>Ernakulam,Kerala <span>(View map)</span></h6><br />
            <p><Phone />+91 8891873123   <Mail /> azariaeventa@gmail.com</p>
            <p></p>
        </div>
          <div className="right">
            <Button onClick={()=>setOpenDate(!openDate)} className="button">Check Availability<CalendarMonthTwoToneIcon/>
            </Button>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}
          </div>
          
      </div>

    </div>
      
    <div className="SubHeading">
      <h3> GALLARY</h3>
    </div>
    <Gallary/>
   </>
  );
}

export default HomePage;
