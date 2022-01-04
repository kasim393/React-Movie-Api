import React, { useEffect, useState } from 'react';
import './detail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiConfig from '../../api';
import Cast from '../../components/cast/Cast';
import Banner from '../../components/banner/Banner';
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const DETAIL = apiConfig.detail(id);
    await axios.get(BASE + DETAIL+ API_KEY)
      .then(res => {
        // console.log(res.data);
        setDetail(res.data)
      }).catch(error => console.log(error));
    }
    fetchDetail()
    }, [id])

  return (
    <>
    {detail && (
      <>
       <div className='detail' >
        <div className="detail-banner">
          <Banner id={id} />
        </div>
        <div className="detail-info">
          <div className="detail-desc">
            <div className="left-desc">
              <p className='desc-title'>{detail.title}</p>
              <div className="col-3">
                <div className="year">{detail.release_date.split("-")[0]}</div>
                <span>&#9679;</span>
                <div className="genre"> {detail.genres[0].name}</div>
                <span>&#9679;</span>
                <div className="length">{detail.runtime} minute</div>
              </div>
              <div className="rating">
                <p>{detail.vote_average + ` (${detail.vote_count} vote)`} </p>
              </div>
            </div>
            <div className="right-desc">
              <p> {detail.overview} </p>
            </div>
          </div>
          <div className="detail-stars">
            <div>
              <Cast  id={id} />
            </div>

              <div className="right-button">
                <button className='btn_watchNow'>Watch Now</button>
              </div>
          </div> 
        </div>
      </div>
      </>
    )
    
    }
   
    </>
  )
}

export default Detail
