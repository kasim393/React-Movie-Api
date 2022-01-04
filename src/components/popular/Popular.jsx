import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './popular.css'
import apiConfig from '../../api'
import { Link } from 'react-router-dom';

const Popular = ({popular}) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          variableWidth: true,
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
          slidesToShow: 3,
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
          slidesToShow: 2,
          variableWidth: false,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          swipeToSlide:true,
        }
      }
    ]
  };
  return (
    
    <div className='slider'>
      <p className='mainTitle'>Popular</p>
       <Slider {...settings} >
      {popular.map(pop => {
        if(pop.id !== 512195) // optional just to remove bad banner of a movie
        return (
          <div key={pop.id}>
            <img src={apiConfig.w500Image(pop.poster_path)} alt="" />
          <Link className='link' to={"detail/"+pop.id} pop={pop}>
            <p className='Ptitle'>{pop.title}</p></Link>
            <span className='pminute'><i className="far fa-clock"></i> {pop.release_date}</span>
          </div>
        ) 
    })}
    </Slider>
    </div>
  )
}

export default Popular
