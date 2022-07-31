
 

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { InputLabel, MenuItem, Select, } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addOrder, reset } from '../../../features/auth/user/orderSlice'


function Form6() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { orders, form1, form2, isError, isSuccess, message } =
        useSelector((state) => state.allorder);

    const [formData, setFormData] = useState({ events: '', photography: '', catering: '' });

    const { events, photography, catering } = formData;


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess && orders) {
            navigate('/checkout');
        }
        dispatch(reset());
    }, [orders, isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = (event) => {
        event.preventDefault();
        const Data = {
            ...form1,
            ...form2,
            events,
            photography,
            catering,
        };
        dispatch(addOrder(Data))
    }


    return (
        <>
            <Header />
            <div className="container">
                <div className="form-container">


                    <form className="form-block" onSubmit={onSubmit}>
                        <div className="full-width">
                            <div className="col-half">
                                <InputLabel id="demo-simple-select-label" multiple>
                                    Events
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="events"
                                    value={events}
                                    label="events"
                                    onChange={onChange}
                                    fullWidth

                                >
                                    <MenuItem value={'Pre-wedding'}>Pre-wedding</MenuItem>
                                    <MenuItem value={'Haldi'}>Haldi</MenuItem>
                                    <MenuItem value={'Wedding-day'}>Wedding-day</MenuItem>
                                    <MenuItem value={'Reception'}>Reception</MenuItem>
                                    <MenuItem value={'Bride-to-be'}>Bride-to-be</MenuItem>
                                    <MenuItem value={'Groom-to-be'}>Groom-to-be</MenuItem>
                                    <MenuItem value={'Sangeet'}>Sangeet</MenuItem>
                                </Select>
                            </div>
                            <div className="col-half">
                                <InputLabel id="demo-simple-select-label" multiple>
                                    Photography
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="photography"
                                    value={photography}
                                    label="photography"
                                    placeholder=""
                                    onChange={onChange}
                                    fullWidth

                                >
                                    <MenuItem value={'Video'}>Video</MenuItem>
                                    <MenuItem value={'Photo + Video'}>Photo + Video</MenuItem>
                                    <MenuItem value={'Photo'}>Photo</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div className="full-width">
                            <div className="col-half">
                                <InputLabel id="demo-simple-select" multiple>
                                    Catering
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select"
                                    id="demo-simple-select"
                                    name="catering"
                                    value={catering}
                                    label="Specialization"
                                    onChange={onChange}
                                    fullWidth
                                >
                                    <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
                                    <MenuItem value={'Lunch'}>Lunch</MenuItem>
                                    <MenuItem value={'Dinner'}>Dinner</MenuItem>
                                    <MenuItem value={'Evening'}>Evening</MenuItem>
                                </Select>
                            </div>
                            <div className="col-half">
                            </div>
                        </div>
                        <div className="col-full">
                            <input className="btn btn-submit" type="submit" value="Submit" />

                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Form6;

