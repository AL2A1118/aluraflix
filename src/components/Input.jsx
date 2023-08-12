function Input({ label }) {
  return (
    <div className='flex flex-col bg-slate-600 rounded py-2 px-3'>
      <label className='text-sm' htmlFor=''>
        {label}
      </label>
      <input
        className='bg-transparent focus-visible:outline-none text-slate-100'
        type='text'
      />
    </div>
  )
}

export default Input
