function Button({ name, position }) {
  return (
    <button
      className={`px-4 py-2 ${
        position == 'left'
          ? 'bg-blue-500 text-gray-200'
          : 'bg-gray-300 text-gray-950 font-medium'
      } w-full rounded-lg `}
    >
      {name}
    </button>
  )
}

export default Button
