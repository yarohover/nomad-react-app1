import {Link} from "react-router-dom";
function Movies({data}){

  return (
      <div>
        <h1>{data.title}({data.year})</h1>
        <h2><span>{data.rating}</span>/<span>{data.runtime}m</span></h2>
        <ul>{data.genres.map((elmt,idx)=><li key={idx}>{elmt}</li>)}</ul>
        <img src={data.medium_cover_image} alt="" />
        <p>{data.summary}</p>
        <li><Link to={`/${data.id}`}>Details</Link></li>
      </div>
  );
 };

 export default Movies;