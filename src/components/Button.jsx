<<<<<<< HEAD
import { Link } from 'react-router-dom'

function Button({ name, position, path }) {
=======
function Button({ name, position, handleSubmit }) {
>>>>>>> 72ff199ffe5e488f3674e726defa81e76bb497aa
  return (
    <Link
      className={`px-4 py-2 ${
        position == 'left'
          ? 'bg-blue-500 text-gray-200'
          : 'bg-gray-300 text-gray-950 font-medium'
<<<<<<< HEAD
      } w-full rounded-lg flex justify-center`}
      to={path}
=======
      } w-full rounded-lg `}
      onClick={handleSubmit}
>>>>>>> 72ff199ffe5e488f3674e726defa81e76bb497aa
    >
      {name}
    </Link>
  )
}

export default Button
