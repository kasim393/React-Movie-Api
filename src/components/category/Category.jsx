import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './category.css'
const Category = ({category}) => {
  
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className='category'>
    <p className='mainTitle'>Category</p>
     <Slider {...settings} >

     {category.map(cat => (
          <div className="cat" key={cat.id}>
               <p className='Ctitle'>{cat.name}</p>
              {/* <Link className='link' to={"detail/"+cat.id} up={cat}>
              </Link> */}
          </div>
        ))}
   
      
    </Slider>
  </div>
  )
}

export default Category
