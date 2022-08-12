import { useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import styles from "./MovieSmall.module.css";
import "./MovieSmall.css";
function MovieSmall({data, rank, setLoca}){
  const sum = data.summary===""?"No Summary":data.summary;
  const location = useLocation();
  useEffect(() => {
    setLoca(location);
  }, [location, setLoca]);
  return (
      <div className={styles.movieSmall}>
        <div className="container">
          <div>{rank}</div>
          <img src={data.medium_cover_image} alt="" />
          <span>{data.rating.toFixed(1)}</span>
          <h2>{data.title}</h2>
          <h3> </h3>
          <ul>{data.genres.map((elmt,idx)=><li key={idx}>{elmt}</li>)}</ul>
          <p>{sum}</p>
          <li><Link to={`/${data.id}`}>Details</Link></li>
        </div>
      </div>
  );
 };

 export default MovieSmall;