import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
function Carousel({ color, listImage }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            background: i === currentIndex ? color : '#ccc',
            borderRadius: '50%'
          }}
        ></div>
      )
    },
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    swipeToSlide: true,
    dotsClass: 'absolute bottom-4 w-full !flex justify-center gap-2',
    arrows: false
  }
  return (
    <Slider {...settings}>
      {listImage &&
        listImage.map(({ imagen, id }) => (
          <li key={id}>
            <img
              className='border-2 rounded '
              style={{ borderColor: color }}
              src={imagen}
              alt={`Image ${id}`}
            />
          </li>
        ))}
    </Slider>
  )
}

export default Carousel
