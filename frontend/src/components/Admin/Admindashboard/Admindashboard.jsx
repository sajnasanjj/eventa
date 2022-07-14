import React from "react";

function Admindashboard() {
  return (
    <>
       <FeaturedInfo />
              <AdminChart data={userData} title="Chart" grid dataKey="Active User" />
              <div className="homeWidgets">
                <WidgetLg />
                <WidgetSm />
              </div> 
      </>
  );
}

export default Admindashboard;
