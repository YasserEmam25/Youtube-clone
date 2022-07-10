import React from "react";
import "../css/SideRow.css";

function SideRow({ Icon, title }) {
  return (
    <div className="siderow">
      <Icon className="siderow-icon" />
      <h3 className="siderow-title">{title}</h3>
    </div>
  );
}

export default SideRow;
