import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     hii
     HIHI
     HI
     <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
