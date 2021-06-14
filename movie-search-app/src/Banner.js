import React, {useState, useEffect} from 'react'
import baseURL from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function updateBanner() {
      const request = await baseURL.get(requests.fetchNetflixOriginals);
      const moviesData = request.data.results;
      setMovie[moviesData[Math.floor(Math.random() * moviesData.length)]];
      return request;
    }
    updateBanner();
  }, [])  

  return (
    <header>
      <div className="banner"
        style={{backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backgrop_path}"
        )`,
        backgroundPosition: "center center"}}>
        <div className="banner__contents">
          <h1>
            {movie?.title || movie?.name || movie?.original_name}
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
          </h1>
        </div>

        <h1 className="banner__description">
          {movie?.bannerOverview}
        </h1>
      </div>
    </header>
  )
}

export default Banner
