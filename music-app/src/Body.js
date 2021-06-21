import React from 'react'
import "./body.css";
import Header from "./Header";
import { useDataLayerValue} from "./DataLayer";
import { PlayCircleFilled } from '@material-ui/icons';
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body__info">
        <img src={discover_weekly.images[0].url || "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yandhi_Cover_Art_%28Free_License%29.jpg"} alt="playlist cover img" />
        <div className="body__info_Text">
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item =>
          (<SongRow track={item.track} /> ))}
      </div>
    </div>
  )
}

export default Body
