import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiConfig from '../../api';
import './banner.css'

const Banner = ({id}) => {
  const [banner, setBanner] = useState([]);
  const [singleBanner, setSingleBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const IMAGES = apiConfig.images(id);
    await axios.get(BASE + IMAGES+ API_KEY)
      .then(res => {
        setBanner(res.data.backdrops.slice(1,5))
        setSingleBanner(res.data.backdrops.slice(0,1))
        console.log(res.data.backdrops.slice(1,5));
      
      }).catch(error => console.log(error));

    }
    fetchBanner()
    }, [id])


  return (
    <div className='banner'>
      <div className="bigBanner">
      {
          singleBanner.map((img , i) => (
            <div key={i} className="bigImg" id="banImg" style={{background: `linear-gradient(transparent, transparent,rgba(0,0,0, 0.8)), url(${apiConfig.originalImage(img.file_path)})` ,backgroundPosition:"center", backgroundSize:"cover"}}></div>
          ))}
    
        <div className="listBanner">
          {
          banner.map((img , i) => (
            <img key={i} src={apiConfig.w500Image(img.file_path)} alt="banner"  />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
