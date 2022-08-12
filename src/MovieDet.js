import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./MovieDet.module.css";

function MovieDet({movies}){
  const id = useParams().id;
  const [tData, setTData]  = useState({});
  useEffect(() => {
    movies.forEach(element => {
      if(element.id*1 === id*1){
        setTData(element);
      }
    });
  }, [movies, id]);
  const nevi = useNavigate();
  return (
    <div className={styles.movieDet}>
      <li><button onClick={()=>nevi(-1)}>Home</button></li>
      <h1>Details of {tData.title}</h1>
    </div>
  );
};

export default MovieDet;
