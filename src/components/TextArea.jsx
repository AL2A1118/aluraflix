function TextArea({ label }) {
  return (
    <div className='flex flex-col bg-slate-600 rounded py-1 px-3'>
      <label className='text-sm' htmlFor=''>
        {label}
      </label>
      <textarea
        className='bg-transparent focus-visible:outline-none text-slate-100'
        rows={5}
        type='text'
      />
    </div>
  )
}

export default TextArea
