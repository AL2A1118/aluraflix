function Category({ title, color }) {
  return (
    <section className='flex flex-col gap-2 max-w-4xl'>
      <div className={`${color} py-1 px-3 text-slate-200 rounded-lg w-max`}>
        <h2 className='text-lg'>{title}</h2>
      </div>
      <p>Formación {title} de Alura Latam</p>
      <div className='w-48 h-48 rounded-lg bg-blue-300'></div>
    </section>
  )
}

export default Category
