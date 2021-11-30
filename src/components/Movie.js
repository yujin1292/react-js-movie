import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";
import {useState, useEffect} from "react"

function Movie({id, title, img, summary, genres}){
  const maxLen = 300;

  const [showResults, setShowResults] = useState(false)
  const onMouseEnter = (event)=> setShowResults(true);
  const onMouseExit =(event)=> setShowResults(false);

  return (
   <div className={styles.movie} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
     <img className={styles.movie__img} src={img} alt=""/>
     {showResults ?   <div className={styles.wrapper}>
       <div className={styles.movie__detail}>
         <h2 className={styles.movie__title}>{title}</h2>      
         <ul className={styles.movie__genres}>
           {genres.map((value)=> <li key={value}>{value}</li>)}
         </ul>
         <p className={styles.movie__summary}>{summary.length > maxLen ? `${summary.slice(0, maxLen)} ...` : summary}</p>
         <h2 className={styles.link}><Link to={`/movie/${id}`}>get more info</Link></h2>  
       </div>
     </div>: null}
   
   </div>
  );
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  img : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;