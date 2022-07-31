import React from "react";
import './Form.css'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {form1} from '../../../features/auth/user/orderSlice'


function Form1() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Data, setData] = React.useState({
        phonenumber: '',
        iam: '',
        bride: '',
        groom: '',
        guests:'',
        start_date:'',
        end_date:''
    })
    const { bride, groom, iam, guests, phonenumber,start_date,end_date } = Data
    const onChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    
    const onSubmit=(event)=>{
    event.preventDefault()
    const orderData = {
        bride, groom, guests, phonenumber, iam, start_date, end_date,
    }

    dispatch(form1(orderData))
    navigate('/photos/Form2');  
    const data = new FormData(event.currentTarget)
    console.log({
        bride: data.get('bride'),
        groom: data.get('groom'),
        phonenumber: data.get('phonenumber'),
        iam:data.get('iam'),
        start_date:data.get('start_date'),
    })

   };

  return (
    <>
          <div className="container">
              <div className="form-container">
                 

                  <form className="form-block" onSubmit={onSubmit}>
                      <div className="full-width">
                          <div className="col-half">
                              <label >Phone Number</label>
                              <input type="tel" name="phonenumber" placeholder="+91 8891873123" value={phonenumber} onChange={onChange} className="input-field" required/>
                          </div>
                          <div className="col-half">
                              <label>I am</label>
                              <label className="radio-inline" value={iam}>
                                  <input type="radio" name="iam" id="inlineRadio1" onChange={onChange} value={'Bride'} /> Bride
                              </label>
                              <label className="radio-inline" value={iam}>
                                  <input type="radio" name="iam" id="inlineRadio2" onChange={onChange} value={'Groom'}/> Groom
                              </label>
                              {/* <label className="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={onChange} /> Relative
                              </label>
                              <label className="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={onChange} /> Friend
                              </label> */}
                          </div>
                      </div>
                      <div className="full-width">
                          <div className="col-half">
                              <label>Bride</label>
                              <input type="text" name="bride" placeholder="John" value={bride} onChange={onChange} className="input-field" required />
                          </div>
                          <div className="col-half">
                              <label >Groom</label>
                              <input type="text" name="groom" placeholder="Smith" value={groom} onChange={onChange} className="input-field" required />
                          </div>
                      </div><br />
                      <div className="full-width">
                          <div className="col-half">
                                 <div className="col-half">
                                  <label >Start Date</label>
                                  <input type="date" name="start_date" id="start_date" value={start_date} placeholder="Start  Date" onChange={onChange} className="input-field" />
                                 </div>
                              <div className="col-half">
                                  <label >Ending Date</label>
                                  <input type="date" name="end_date" id="end_date" value={end_date} placeholder="End  Date" onChange={onChange} className="input-field" />
                              </div>
                                
                          </div>
                          <div className="col-half">
                              <label >Number of Guests</label><br />
                              <input type="number" name="guests" placeholder="500" value={guests} onChange={onChange} className="input-field" />
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
