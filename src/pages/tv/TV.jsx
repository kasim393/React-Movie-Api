import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiConfig from '../../api'
import '../list/list.css'

const TV = () => {
  const [tv,setTv] = useState([]);

  useEffect(() => {
    const fetchTv = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const TV = apiConfig.tv;
   await axios.get(BASE + TV+ API_KEY)
      .then(res => {
        console.log(res.data);
         setTv(res.data.results)
      }).catch(error => console.log(error));
    }
    fetchTv()
    }, [])

  return (
    <div>
       <div className='list'>
        {tv.map(tv => {
        return (
          <div className='list-card' key={tv.id}>
          <Link className='link' to={"/tv/"+tv.id} pop={tv}>
            <img src={apiConfig.w500Image(tv.poster_path)} alt="" />
            <p className='Ptitle'>{tv.name}</p></Link>
            <span className='Pminute'><i className="far fa-clock"></i> {tv.first_air_date}<span className='rank'>{tv.vote_average}</span></span>
          </div>
        ) 
    })}
    </div>
    </div>
  )
}

export default TV
