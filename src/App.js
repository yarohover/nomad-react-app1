import {useState, useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSmall from "./MovieSmall.js";
import MovieDet from "./MovieDet.js";

// 'https://yts.mx/api/v2/list_movies.json?limit=30&minimum_rating=8.5&sort_by=rating'

function App() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [location, setLoacation] = useState(null);
  async function getMovies(){
    const movJson = await(
      await fetch('https://yts.mx/api/v2/list_movies.json?limit=30&minimum_rating=8.5&sort_by=rating')
    ).json();
    setMovieData(movJson.data.movies);
    const _movies = movJson.data.movies.map((elmt,idx)=><MovieSmall key={idx} data={elmt} rank={idx+1} setLoca={(loca)=>{setLoacation(loca)}}/>);
    setMovies(_movies);
    setLoading(false);
  };
  const afterLoad = <div>
      <h1>Top Rating Movies</h1>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes >
          <Route path="/" element={movies}></Route>
          <Route path="/:id" element={<MovieDet movies={movieData}></MovieDet>}></Route>
        </Routes>
      </BrowserRouter>
  </div>
  useEffect(()=>{
    getMovies();
  },[]);
  // const hist = useHistory();
  useEffect(()=>{
    const targets = document.querySelectorAll('.container');
    targets.forEach((elmt, idx) => {
      setTimeout(() => {
        elmt.classList.add('on');
      }, idx*70);
    });
  }, [location]);
  return (
    <div className={styles.App}>
      {loading?<h1>Loading..</h1>:afterLoad};
    </div>
  );
}

export default App;
