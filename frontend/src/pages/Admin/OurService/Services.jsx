import React ,{useEffect} from "react";
import './Services.scss';
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import ServiceDatatable from "../../../components/Admin/Datatable/ServiceDatatable";
import { getService } from "../../../features/auth/admin/serviceProvide/serviceSlice";
import { useDispatch } from "react-redux";
function OurServices() {

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getService())
        }, [dispatch]);
  return (
      <>
          <AdminHeader />
          <div className="containerr">
              <Sidebar />
              <div className="serviceDetails">
                  <div className="service">
                      Our Services
                  </div>
                  <ServiceDatatable/>
              </div>
          </div>
      </>
  );
}
export default OurServices;
