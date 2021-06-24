import React from 'react'
import "./header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTimeRounded";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutlineRounded";

function Header() {
  let user = {} // DELET
  return (
    <div className="header">
      <div className="header__left">
        <Avatar 
          className="header__avatar"
          alt="user avatar"
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="search chatrooms"></input>
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
