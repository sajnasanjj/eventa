import React from "react";
import './Form.css'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {getOrder,reset} from '../../../features/auth/user/orderSlice'
import { LabelImportant } from "@material-ui/icons";

function Form1() {
    const [Data, setData] = React.useState({
        phonenumber:'',
        iam:'',
        bride:'',
        groom:'',
        days_event:'',
        date:''
})
    const {bride,groom,iam,days_event,date,phonenumber} = Data
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {orders,isLoading,isError,isSuccess,message} = useSelector ((state) => state.allorder)
    
    useEffect(()=>{
        if(isError){
            toast.error(message)
            console.log(message);
        }if(isSuccess){
            navigate('/Form2')
        }dispatch(reset())
    }, [orders, isLoading, isError, isSuccess, message,navigate,dispatch])
    
    const onChange=(event)=>{
         setData((prevState)=>({
            ...prevState,
            [event.target.name] : event.target.value
         }))
   }
   const onSubmit=(event)=>{
    event.preventDefault()
    const orderData = {
        bride,groom,days_event,date,phonenumber,iam
    }
    dispatch(getOrder(orderData))

   
    const data = new FormData(event.currentTarget)
    console.log({
        bride: data.get('bride'),
        groom: data.get('groom'),
        phonenumber: data.get('phonenumber'),
    })

   }

  return (
    <>
          <div className="container">
              <div className="form-container">
                  <div className="header">
                      <h1>Get's Started</h1>
                      <h6>Plan Your Event with Azaria Events.<br/> Its Make Your Day Special</h6>
                  </div>

                  <form className="form-block" onSubmit={onSubmit}>
                      <div className="full-width">
                          <div className="col-half">
                              <LabelImportant>Phone Number</LabelImportant>
                              <input type="tel" name="phonenumber" placeholder="+91 8891873123" value={phonenumber} onChange={onChange} className="input-field" />
                          </div>
                          <div className="col-half">
                              <label >I am</label>
                              <label className="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={onChange} /> Bride
                              </label>
                              <label className="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={onChange} /> Groom
                              </label>
                              <label className="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={onChange} /> Relative
                              </label>
                              <label className="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={onChange} /> Friend
                              </label>
                          </div>
                      </div>
                      <div className="full-width">
                          <div className="col-half">
                              <label >Bride</label>
                              <input type="text" name="bride" placeholder="John" value={bride} onChange={onChange} className="input-field" />
                          </div>
                          <div className="col-half">
                              <label >Groom</label>
                              <input type="text" name="groom" placeholder="Smith" value={groom} onChange={onChange} className="input-field" />
                          </div>
                      </div>
                      <div className="full-width">
                          <div className="col-half">
                              <label for="date">Date of Event</label>
                              <input type="date" name="date" placeholder="Smith" value={date} onChange={onChange} className="input-field" />
                          </div>
                          <div className="col-half">
                              <label for="number">Number of Days</label>
                              <input type="number" name="days_event" placeholder="3" value={days_event} onChange={onChange} className="input-field" />

                          </div>
                      </div>
                     
                      <div className="full-width">
                          <div className="col-full">
                              <input className="btn btn-submit" type="submit" value="Submit" />
                          </div>
                      </div>
                  </form>
              </div>
          </div>

          {/* <div className="col-full">
              <p style="fontStyle: italic; color: #2196f3; fontSize: 18px; textAlign: center; marginTop: 50px; marginBottom: 20px;">Follow me on Twitter: <a href="https://twitter.com/mrdogra007/" target="_blank">@mrdogra007</a></p>
          </div> */}
    </>
  );
        }

export default Form1;
