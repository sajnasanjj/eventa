import React from "react";
import './Services.scss';
import { useEffect } from 'react'
import { getService } from "../../../features/auth/admin/serviceProvide/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import ServiceDetails from "../ServiceDetails/ServiceDetails";
function Services() {
    const dispatch = useDispatch();
    const { services } = useSelector((state) => state.allservice);

    useEffect(() => {
        dispatch(getService())
    }, [dispatch]);
    return (
        <>
            <div className="serviceHeading">
                <h2>Services</h2>
            </div>

            {/* <div className="container"> */}

                <div className="services">
                    {services.map((input) => (

                        <div className="serviceItem">
                            <Link to="/serviceDetails"><img src={input.image} alt="" className="serviceImg" /></Link>
                            <div className="serviceTitles">
                                <h3>{input.name}</h3>

                            </div>
                        </div>
                    ))}

                </div>
            {/* </div> */}
        </>
    );
}

export default Services;
