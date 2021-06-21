import React from 'react'
import "./body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body__info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Yandhi_Cover_Art_%28Free_License%29.jpg" alt="playlist cover img" />
        <div className="body__info_Text">
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>description ...</p>
        </div>
      </div>
    </div>
  )
}

export default Body
