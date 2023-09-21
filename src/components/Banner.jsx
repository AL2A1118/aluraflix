import Button from './Button'
function Banner() {
  return (
    <section className='relative pb-4 h-[50vh] flex flex-col justify-end items-center [&>a]:w-auto [&>a]:px-10 gap-4'>
      <div className='absolute inset-0 bg-banner bg-cover bg-center -left-4 w-screen opacity-30 z-[-1]'></div>
      <h2 className='text-3xl text-slate-100'>Challenge React</h2>
      <Button name='Ver' to='/' />
    </section>
  )
}

export default Banner
