import React from "react";
import './Services.scss';
import { useEffect } from 'react'
import { getService } from "../../../features/auth/admin/serviceProvide/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
function Services() {
    const dispatch = useDispatch();
    const { services } = useSelector((state) => state.allservice);
    console.log("servicesss",services)
    useEffect(() => {
        dispatch(getService())
    }, [dispatch]);
    return (
        <>
            <div className="serviceHeading py-5">
                <h2>Services</h2>
            </div>
                <div className="row servicess">
                    {services.map((input) => (
                        <div className="col-md-5 serviceItemm mb-4">
                            <Link to={`/serviceDetails/${input.name}`}><img src={input.image} alt="" className="serviceImg" id={input.name}/></Link>
                            <div className="serviceTitless">
                                <h3>{input.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    );
}

export default Services;
