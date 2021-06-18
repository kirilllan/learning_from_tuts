import React from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="search for artists, songs or podcasts" type="text"></input>
      </div>
      <div className="header__right">
        <Avatar src="" alt="avatar" />
        <h4>UsErNaMe</h4>
      </div>
    </div>
  )
}

export default Header
