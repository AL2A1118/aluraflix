import Button from './Button'
function Banner() {
  return (
    <section className='relative h-[50vh] flex flex-col justify-end items-center [&>a]:w-auto [&>a]:px-10 gap-4'>
      <h2 className='text-3xl text-slate-100'>Challenge React</h2>
      <Button name='Ver' to='/' />
      <div className='-z-10 opacity-50 bg-center absolute -left-4 w-screen h-[50vh] bg-banner bg-cover'></div>
    </section>
  )
}

export default Banner
