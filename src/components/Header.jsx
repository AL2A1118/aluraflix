import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
function Header() {
  return (
    <header className='flex justify-center items-center border-b-4 border-blue-500 p-4 mb-6'>
      <Link to='/'>
        <img className='w-40' src={logo} alt='' />
      </Link>
    </header>
  )
}

export default Header
