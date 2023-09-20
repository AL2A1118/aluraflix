import Slider from './Slider'

function Category({ title, color }) {
  return (
    <section className='flex flex-col gap-2 max-w-4xl overflow-hidden'>
      <div
        className='py-1 px-3 text-slate-200 rounded-lg w-max'
        style={{ backgroundColor: color }}
      >
        <h2>{title}</h2>
      </div>
      <p className='text-sm'>Formación {title} de Alura Latam</p>
      <Slider color={color} title={title} />
    </section>
  )
}

export default Category
