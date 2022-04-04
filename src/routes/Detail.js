import React, { useEffect } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
const Detail = () => {
    const {location} = useLocation;
    const {navigate} = useNavigate;
    console.log(navigate);
    console.log(location);

    useEffect(()=>{
        if(location.state === undefined){
            navigate("/");
        }
    },[])
    return (
        <>
            {location.state ? (
                <span>{location.state.title}</span>
            ):(
                null
            )}
        </>
    );
}

export default Detail;