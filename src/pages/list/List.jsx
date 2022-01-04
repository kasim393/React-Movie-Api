import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiConfig from '../../api'
import './list.css'

const List = () => {
  const [popular,setPopular] = useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const POPULAR = apiConfig.popular;
   await axios.get(BASE + POPULAR+ API_KEY)
      .then(res => {
         setPopular(res.data.results)
         console.log(res.data.results)
      }).catch(error => console.log(error));
    }
    fetchPopular()
    }, [])
    // tv



  return (
      <>
    <div className='list'>
        {popular.map(pop => {
        if(pop.id !== 512195) // optional just to remove bad banner of a movie
        return (
          <div className='list-card' key={pop.id}>
          <Link className='link' to={"/detail/"+pop.id} pop={pop}>
            <img src={apiConfig.w500Image(pop.poster_path)} alt="" />
            <p className='Ptitle'>{pop.title}</p></Link>
            <span className='Pminute'><i className="far fa-clock"></i> {pop.release_date} <span className='rank'>{pop.vote_average}</span></span>
          </div>
        ) 
    })}
    </div>
    </>
  )
}

export default List
