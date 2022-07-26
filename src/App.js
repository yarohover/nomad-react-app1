import {useState, useEffect} from "react";
import "./App.css"

// 'https://yts.torrentbay.to/api/v2/list_movies.json'

function App() {
  const [movies, setMovies] = useState([]);
  async function getMovs(){
    const json = await (
      await fetch('https://yts.torrentbay.to/api/v2/list_movies.json', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }})
    ).json();
    setMovies(json);
  };
  useEffect(()=>{
    getMovs();
  }, []);
  getMovs();
  return (
    <div className="App">
      {movies}
    </div>
  );
}

export default App;
