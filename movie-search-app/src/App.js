import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     hii
     HIHI
     HI
     <Row title="Netflix originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Trending now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
