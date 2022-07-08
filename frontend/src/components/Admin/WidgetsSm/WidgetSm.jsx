import React from "react";
import './widgetSm.scss';
import {Visibility} from '@material-ui/icons'

function WidgetSm() {
  return (
  <div className="widgetSm">
      <span className="widgetSmTitle">Payment Details</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Sajna </span>
                <span className="widgetSmUserTitle">500000</span>
            </div>
            <button className="widgetSmButton"><Visibility/></button>
         </li>
      </ul>
  </div>
  );
}

export default WidgetSm;
