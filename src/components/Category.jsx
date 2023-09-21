import { useContext } from 'react'
import Carousel from './Carousel'
import { ApiContext } from '../context/Api'

function Category({ title, color }) {
  const { videos } = useContext(ApiContext)
  const listImage = videos?.filter(
    ({ categoria }) => categoria.toLowerCase() === title.toLowerCase()
  )
  return (
    <section className='flex flex-col gap-2 max-w-4xl overflow-hidden'>
      <div
        className='py-1 px-3 text-slate-200 rounded-lg w-max'
        style={{ backgroundColor: color }}
      >
        <h2>{title}</h2>
      </div>
      <p className='text-sm'>Formación {title} de Alura Latam</p>
      <Carousel listImage={listImage} color={color} />
    </section>
  )
}

export default Category
