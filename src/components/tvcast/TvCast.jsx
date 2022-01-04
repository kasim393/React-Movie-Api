import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiConfig from '../../api';
import '../cast/cast.css'

const TvCast = ({id}) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const tvCast = apiConfig.tvcast(id);
    await axios.get(BASE + tvCast+ API_KEY)
      .then(res => {
        console.log(res.data.cast);
        setCast(res.data.cast.slice(0 ,3))
      }).catch(error => console.log(error));
    }
    fetchCast()
    }, [id])
    return (
      <>
      <p style={{fontWeight:500}}>Stars</p>
      { 
       
        cast.map((item, i ) => (
       
          <div className="left-star" key={i}>
            <div className="star">
              <img src={apiConfig.w500Image(item.profile_path)} alt="actor"/>
              <div className="star-two-row">
                <div className="star-name">{item.name}</div>
                <div className="star-known">{item.known_for_department}</div>
              </div>
            </div>
          </div>
          ))}
       </>
    )
}

export default TvCast
