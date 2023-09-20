import { useContext } from 'react'
import { ApiContext } from '../context/Api'

function Category({ title, color }) {
  const { videos } = useContext(ApiContext)
  return (
    <section className='flex flex-col gap-2 max-w-4xl'>
      <div
        className='py-1 px-3 text-slate-200 rounded-lg w-max'
        style={{ backgroundColor: color }}
      >
        <h2 className='text-lg'>{title}</h2>
      </div>
      <p>Formación {title} de Alura Latam</p>
      {videos &&
        videos.map(({ imagen, categoria, id }) => {
          if (categoria === title) {
            return (
              <img
                style={{ borderColor: color }}
                className='border-2 rounded'
                key={id}
                src={imagen}
                alt='img'
              />
            )
          }
        })}
    </section>
  )
}

export default Category
