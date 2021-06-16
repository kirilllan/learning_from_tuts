import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {setToken(_token)};
  }, []);

  return (
    <div className="app">
      {
        token ? ('fefu') : (<Login />)
      }
      <Login />
    </div>
  );
}

export default App;
