import { useContext, useState } from 'react'
import { ApiContext } from '../context/Api'

function SelectCategory({ infoVideo, setInfoVideo }) {
  const [active, setActive] = useState(false)
  const { categories } = useContext(ApiContext)
  return (
    <div className='flex flex-col bg-slate-600 rounded py-2 px-3 relative '>
      <div
        className='flex w-full justify-between items-center cursor-pointer'
        onClick={() => setActive(!active)}
      >
        <span className='text-sm'>Escoja una categoría</span>
        {active ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M6 15l6 -6l6 6'></path>
          </svg>
        ) : (
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M6 9l6 6l6 -6'></path>
          </svg>
        )}
      </div>
      {active && (
        <ul className='flex flex-col absolute left-0 top-[54px] bg-slate-600 w-full rounded py-2 px-[6px] text-slate-200 border-slate-100 border-2 border-slate-200/25'>
          {categories &&
            categories.map(({ id, titulo }) => (
              <li
                className='px-[6px] py-1 hover:bg-blue-500 rounded cursor-pointer capitalize'
                onClick={() => {
                  setActive(!active)
                  setInfoVideo({ categoria: titulo, ...infoVideo })
                }}
                key={id}
              >
                {titulo}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default SelectCategory
