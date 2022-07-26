import {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies.js";
import Movie from "./Movie.js";

// 'https://yts.mx/api/v2/list_movies.json?limit=30&minimum_rating=8.5&sort_by=rating'

function App() {
  const [movieData, setMovieData] = useState([]);
  const [movies, setMovies] = useState([]);
  async function getMovies(){
    const movJson = await(
      await fetch('https://yts.mx/api/v2/list_movies.json?limit=30&minimum_rating=8.5&sort_by=rating')
    ).json();
    setMovieData(movJson.data.movies);
    const _movies = movJson.data.movies.map((elmt,idx)=><Movies key={idx} data={elmt} />);
    setMovies(_movies);
  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={movies}></Route>
          <Route path="/:id" element={<Movie movies={movieData}></Movie>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
