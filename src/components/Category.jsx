function Category({ title, color }) {
  return (
    <section className='flex flex-col gap-2'>
      <div className={`${color} py-2 px-4 text-slate-200 rounded-lg w-max`}>
        <h2 className='text-xl'>{title}</h2>
      </div>
      <p>Formacion {title} de Alura Latam</p>
      <div className='w-40 h-40 rounded-lg bg-blue-300'></div>
    </section>
  )
}

export default Category
