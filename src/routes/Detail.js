import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDetails = async () =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json);
    }

    useEffect( ()=>{
        getDetails(); 
    },[]);

    console.log(movie);

    return(
    <div>
    {loading ?
        (<div className={styles.loader}><span>Loading...</span></div>)
        :
       ( 
       <div>

        <img className={styles.background} src={movie.background_image} alt=""/>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{movie.title_long}</h1>
        </div>

        <div className={styles.table}>
            <img className={styles.img} src={movie.large_cover_image}/>
            <div className={styles.detail}>
                <ul className={styles.movie__genres}>
                    {movie.genres.map((value)=> <li key={value}>{`#${value}`}</li> )}
                </ul>
                <h3>{movie.like_count} people like this movie</h3>
                
                <h3>rating : {movie.rating}</h3>
                <h3>running time : {movie.runtime} min</h3>
                <p>{movie.description_full}</p>
            </div>
        </div>

       

       </div>)
    }
    </div>);

}

export default Detail;