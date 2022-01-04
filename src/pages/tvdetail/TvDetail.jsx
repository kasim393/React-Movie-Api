import React, { useEffect, useState } from 'react';
import './tvdetail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiConfig from '../../api';
import TvCast from '../../components/tvcast/TvCast';
import TvBanner from '../../components/tvBanner/TvBanner';
const TVDETAIL = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const DETAIL = apiConfig.tvdetail(id);
    await axios.get(BASE + DETAIL+ API_KEY)
      .then(res => {
        console.log(res.data);
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
          <TvBanner id={id} />
        </div>
        <div className="detail-info">
          <div className="detail-desc">
            <div className="left-desc">
              <p className='desc-title'>{detail.name}</p>
              <div className="col-3">
                <div className="year">{detail.first_air_date.split("-")[0]}</div>
                <span>&#9679;</span>
                <div className="genre"> {detail.genres[0].name}</div>
                <span>&#9679;</span>
                <div className="length">{detail.number_of_seasons} Seasons</div>
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
              <TvCast  id={id} />
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

export default TVDETAIL
