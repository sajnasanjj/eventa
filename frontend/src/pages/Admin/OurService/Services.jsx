import React from "react";
import './Services.scss';
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import ServiceDatatable from "../../../components/Admin/Datatable/ServiceDatatable";
function OurServices() {
  return (
      <>
          <AdminHeader />
          <div className="containerr">
              <Sidebar />
              <div className="bannerDetails">
                  <div className="banner">
                      Our Services
                  </div>
                  <ServiceDatatable/>
              </div>
          </div>
      </>
  );
}

export default OurServices;
