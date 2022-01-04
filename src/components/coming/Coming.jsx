import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './coming.css'
import apiConfig from '../../api'
import { Link } from 'react-router-dom';
const Coming = ({upcoming}) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    variableWidth: true,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          swipeToSlide:true,
        }
      }
    ]
  };
  return (
    <div className='coming'>
      <p className='mainTitle'>Coming Soon</p>
      <Slider {...settings} >

        {upcoming.map(up => (
          <div className="com" key={up.id}>
              <Link className='link' to={"detail/"+up.id} up={up}>
               <img src={apiConfig.w500Image(up.poster_path)} alt="poster" />
              </Link>
            {/* <p className='CsTitle'>{up.title}</p> */}
          </div>
        ))}
    </Slider>
    </div>
  )
}

export default Coming
