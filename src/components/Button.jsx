import { Link } from 'react-router-dom'

function Button({ name, position, path }) {
  return (
    <Link
      className={`px-4 py-2 ${
        position == 'left'
          ? 'bg-blue-500 text-gray-200'
          : 'bg-gray-300 text-gray-950 font-medium'
      } w-full rounded-lg flex justify-center`}
      to={path}
    >
      {name}
    </Link>
  )
}

export default Button
