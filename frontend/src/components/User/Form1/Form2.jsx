import React from "react";
import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { getOrder, reset } from '../../../features/auth/user/orderSlice'

function Form2() {
    const [Data, setData] = React.useState({
        phonenumber: '',
        iam: '',
        bride: '',
        groom: '',
        days_event: '',
        date: ''
    })
    const { bride, groom, iam, days_event, date, phonenumber } = Data
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orders, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        } if (isSuccess) {
            navigate('/')
        } dispatch(reset())
    }, [orders, isLoading, isError, isSuccess, message, navigate, dispatch])

    const onChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const orderData = {
            bride, groom, days_event, date, phonenumber, iam
        }
        dispatch(getOrder(orderData))


        const data = new FormData(event.currentTarget)
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        })

    }

    return (
        <>
            <div className="container">
                <div className="form-container">
                    <div className="header">
                        <h1>Get's Started</h1>
                        <h6>Plan Your Event with Azaria Events.<br /> Its Make Your Day Special</h6>
                    </div>

                    <form action="" className="form-block" onSubmit={onSubmit}>
                        <div className="full-width">
                            <div className="col-half">
                                <label for="">Phone Number</label>
                                <input type="tel" name="phonenumber" placeholder="+91 8891873123" value={phonenumber} onChange={onChange} className="input-field" />
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
