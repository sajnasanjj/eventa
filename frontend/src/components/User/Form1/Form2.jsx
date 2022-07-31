import React from "react";
import './Form.css'
import { useDispatch} from 'react-redux'
import {  useNavigate } from "react-router-dom";
import { form2 } from '../../../features/auth/user/orderSlice'
import Header from "../Header/Header";

function Form2() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Data, setData] = React.useState({
        address: '',
        street: '',
        city: '',
        district: '',
        postal_code:'',
        country: ''
    })
    const { address,street,city,district,postal_code,country } = Data
    

    const onChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const Datas = {
            address, street, city, district, postal_code, country
        }
        dispatch(form2(Datas))
navigate("/Form3")
        const data = new FormData(event.currentTarget)
        console.log({
           address: data.get('address'),
            street: data.get('street'),
        })

    }

    return (
        <>
        <Header/>
            <div className="container">
                <div className="form-container">
                    <form className="form-block" onSubmit={onSubmit}>
                        <div className="full-width">
                            <div className="col-half">
                                <label >Address</label>
                                <input type="text" name="address" placeholder="Rose Villa" value={address} onChange={onChange} className="input-field" />
                            </div>
                            <div className="col-half">
                                <label >Street</label>
                                <input type="text" name="street" placeholder="Padamugal" value={street} onChange={onChange} className="input-field" required />
                            </div>
                        </div>
                        <div className="full-width">
                            <div className="col-half">
                                <label >City</label>
                                <input type="text" name="city" placeholder="Kakkanad" value={city} onChange={onChange} className="input-field" />
                            </div>
                            <div className="col-half">
                                <label >District</label>
                                <input type="text" name="district" placeholder="Ernakulam" value={district} onChange={onChange} className="input-field"  />
                            </div>
                        </div>
                        <div className="full-width">
                            <div className="col-half">
                                <label >Postal code</label>
                                <input type="text" name="postal_code" placeholder="679575" value={postal_code} onChange={onChange} className="input-field"  />
                            </div>
                            <div className="col-half">
                                <label >Country</label>
                                <input type="text" name="country" placeholder="India" value={country} onChange={onChange} className="input-field" />
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
              <p style="fontStyle: italic; colo: #2196f3; font-size: 18px; text-align: center; margin-top: 50px; margin-bottom: 20px;">Follow me on Twitter: <a href="https://twitter.com/mrdogra007/" target="_blank">@mrdogra007</a></p>
          </div> */}
        </>
    );
}

export default Form2;
