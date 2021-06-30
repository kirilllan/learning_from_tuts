import React, { useState, useEffect } from 'react'
import "./chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useEffect } from 'react/cjs/react.development';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useParams(null);
  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }
  }, [roomId])
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headeLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chat
