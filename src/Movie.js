import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Movie({movies}){
  const id = useParams().id;
  const [tData, setTData]  = useState({});
  useEffect(() => {
    movies.forEach(element => {
      if(element.id*1 === id*1){
        setTData(element);
      }
    });
  }, [movies, id]);

  return (
    <div>
      <li><Link to='/'>Home</Link></li>
      <h1>Details of {tData.title}</h1>
    </div>
  );
};

export default Movie;
