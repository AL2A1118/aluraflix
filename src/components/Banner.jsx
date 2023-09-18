import Button from './Button'
import banner from '../assets/banner.webp'
function Banner() {
  return (
    <section className='relative h-[50vh] flex flex-col justify-end items-center [&>button]:w-auto gap-4'>
      <h2 className='text-4xl text-slate-100'>Challenge React</h2>
      <Button name='Ver' />
      <div className='-z-10 opacity-50 bg-center absolute -left-4 w-screen h-[50vh] bg-banner bg-cover'></div>
    </section>
  )
}

export default Banner
