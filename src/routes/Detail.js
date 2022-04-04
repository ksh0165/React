import React, { useEffect,useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const location = useLocation();
    const [detail,setDetail] = useState(location.state);
    const {navigate} = useNavigate;

    useEffect(()=>{
        if(location === undefined){
            navigate("/");
        }
    },[])
    return (
        <>
            {detail ? (
                <div className="movieDetail">
                <img className="movie__image" src={detail.poster} alt={detail.title} title={detail.title} />
                <div className="movie__data">
                    <h3 className="movie__title">{detail.title}</h3>
                    <h5 className="movie__year">{detail.year}</h5>
                    <ul className="movie__genres">
                        {detail.genres.map((genre,index) => {
                            <li key={index} className="movie__genre">
                                {genre}
                            </li>
                        })}
                    </ul>
                    <p className="movie__summary">{detail.summary}</p>
                </div>
            </div>
            ):(
                null
            )}
        </>
    );
}

export default Detail;