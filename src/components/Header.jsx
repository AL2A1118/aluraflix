import logo from '../assets/logo.svg'
function Header() {
  return (
    <header className='flex justify-center items-center border-b-4 border-blue-500 p-4 mb-6'>
      <img className='w-40' src={logo} alt='' />
    </header>
  )
}

export default Header
