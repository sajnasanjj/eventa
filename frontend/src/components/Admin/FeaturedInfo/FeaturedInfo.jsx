import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import './FeaturedInfo.scss'


function FeaturedInfo() {   
  return (
    <div className="featured">
         <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">Rs 999</span>
            <span className="featuredMoneyRate">10% <ArrowDownward className = "featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
         </div>
          <div className="featuredItem">
              <span className="featuredTitle">Users</span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">Rs 999</span>
                  <span className="featuredMoneyRate">Rs 999 <ArrowUpward className = "featuredIcon positive" /> </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
              <span className="featuredTitle">Sales</span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">Rs 999</span>
                  <span className="featuredMoneyRate">Rs 999 <ArrowDownward className = "featuredIcon negative" /> </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
          </div> 
    </div>
  );
}

export default FeaturedInfo;
