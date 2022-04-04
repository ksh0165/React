import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

const Home = () => {
    const [isLoding, setIsLoding] = useState(true);
    const [movies, setMovies] = useState([]);

    let res = [];
    const getMovies = async () => {
        await fetch("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data.data.movies);
            setMovies(data.data.movies.map(movie=>movie))
        })
        setIsLoding(false);
    }

    useEffect(() => {
        getMovies();
    },[])
    return (
        <>
        <div className="container">
            {isLoding ? (
                <div className="loader">
                    <span className="loader__text">Loding...</span>
                </div>
            ):(
                <div className="movies">
                    {movies.map((movie)=>
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres} />
                        )}
                </div>
            )}
        </div>
        </>
    );
}

export default Home;