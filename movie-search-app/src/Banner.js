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
      
    </header>
  )
}

export default Banner
