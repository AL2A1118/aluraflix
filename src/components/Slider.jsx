import { Carousel } from '@trendyol-js/react-carousel'
import { useContext } from 'react'
import { ApiContext } from '../context/Api'

function Slider({ title, color }) {
  const { videos } = useContext(ApiContext)
  const listImage = videos?.filter(({ categoria }) => categoria === title)
  return (
    <Carousel
      show={1}
      slide={1}
      transition={0.5}
      useArrowKeys={true}
      infinite={false}
      rightArrow={
        <div className='h-full flex items-center'>
          <svg
            className='cursor-pointer w-5 h-5 stroke-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M9 6l6 6l-6 6'></path>
          </svg>
        </div>
      }
      leftArrow={
        <div className='h-full flex items-center '>
          <svg
            className='cursor-pointer w-5 h-5 stroke-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M15 6l-6 6l6 6'></path>
          </svg>
        </div>
      }
    >
      {listImage &&
        listImage.map(({ imagen, id }) => (
          <img style={{ borderColor: color }} key={id} src={imagen} />
        ))}
    </Carousel>
  )
}

export default Slider
