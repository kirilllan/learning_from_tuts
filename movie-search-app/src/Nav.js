import React from 'react'
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/5/5f/A_possum_and_a_movie_camera_1943.jpg"
        alt="navigation bar logotypeish"
      />

      <img 
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/1/12/RZ_Metro_Movie_Theater_2019-07_%284%29.jpg"
        alt="navigation bar minor image"
      />
    </div>
  )
}

export default Nav
