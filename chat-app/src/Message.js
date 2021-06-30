import React from 'react';
import "./message.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="massage">
      <img src={userImage} alt="small image of user" />
      <div className="message__info">
        <h4>
          {user} <span className="message__timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
