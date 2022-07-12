import React from "react";
import './SingleUser.scss';
import '../../../App.css';
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";

import { FaPencilAlt } from "react-icons/fa";
function SingleUser() {
    return (
        <>
            <AdminHeader />
            <div className="containerr">
                <Sidebar />
                <div className="SingleContainer">
                    <div className="top">
                        <div className="left">
                            <h1 className="title">Information</h1>
                            <button className="editButton"><FaPencilAlt /></button>
                            <div className="item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEFXdkls4EKZilBNq5aQttMn-ZTIWsvG5lw&usqp=CAU" alt="" className="itemImg" />
                                <div className="details">
                                    <h5 className="itemTitle">
                                        Sajna
                                    </h5>
                                    <div className="detailItem">
                                        <span className="itemKey">UserName :</span>
                                        <span className="itemValue">Sajna</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Email :</span>
                                        <span className="itemValue">sajna@gmail.com</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone :</span>
                                        <span className="itemValue">8897873123</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">

                        </div>
                    </div>
                    <div className="bottom"></div>
                </div>
            </div>
        </>
    );
}

export default SingleUser;
