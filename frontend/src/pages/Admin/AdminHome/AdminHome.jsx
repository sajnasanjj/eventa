import './AdminHome.scss'
import '../../../App.css'
import React from "react";
import FeaturedInfo from '../../../components/Admin/FeaturedInfo/FeaturedInfo';
import AdminChart from '../../../components/Admin/Chart/AdminChart';
import { userData } from '../../../dummyData'
import WidgetLg from '../../../components/Admin/WidgetLg/WidgetLg';
import WidgetSm from '../../../components/Admin/WidgetsSm/WidgetSm';
import AdminHeader from '../../../components/Admin/AdminNavbar/AdminHeader';
import Sidebar from '../../../components/Admin/AdminSidebar/Sidebar';
import {Outlet} from 'react-router-dom';
function AdminHome() {
  return (
    <>
      <AdminHeader />
      <div className="containerr">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <AdminChart data={userData} title="Chart" grid dataKey="Active User" />
          <div className="homeWidgets">
            <WidgetLg />
            <WidgetSm />
          </div> 
         
        </div>
      </div>
    </>
  );
}
export default AdminHome;
