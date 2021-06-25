import React from 'react'
import "./sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordRounded";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>chat rooms</h2>
          <h3>
            <FiberManualRecordIcon />
            account name
          </h3>
        </div>
        <CreateIcon />
      </div>
    </div>
  )
}

export default Sidebar
