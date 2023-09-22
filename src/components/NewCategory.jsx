import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Table from './Table'
import TextArea from './TextArea'
import { postDataApi } from '../services/servicesApi'
import { v4 as uuidv4 } from 'uuid'
const URL_CATEGORIES = 'http://localhost:3000/categorias'

function NewCategory() {
  const [infoCategory, setInfoCategory] = useState({
    titulo: '',
    color: '',
    descripcion: ''
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInfoCategory((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newCategory = {
      id: uuidv4(),
      ...infoCategory
    }
    postDataApi(URL_CATEGORIES, newCategory)
  }
  const handleClick = () => {
    setInfoCategory({
      titulo: '',
      color: '',
      descripcion: ''
    })
  }
  return (
    <section className='flex flex-col gap-4 mt-10'>
      <form className='flex flex-col gap-4' action='submit'>
        <h2 className='text-xl text-blue-400 font-medium'>Nuevo producto</h2>
        <Input
          label='Título'
          name='titulo'
          value={infoCategory.titulo}
          handleChange={handleOnChange}
        />
        <div className='relative w-full'>
          <Input
            label='Color'
            name='color'
            value={infoCategory.color}
            handleChange={handleOnChange}
          />
          <div
            style={{ backgroundColor: infoCategory.color }}
            className='w-8 h-6 rounded absolute top-[28px] right-3'
          ></div>
        </div>
        <TextArea
          label='Descripción'
          name='descripcion'
          value={infoCategory.descripcion}
          handleInputChange={handleOnChange}
        />
        <div className='flex gap-4'>
          <Button name='Guardar' position='left' handleClick={handleSubmit} />
          <Button name='Limpiar' handleClick={handleClick} />
        </div>
      </form>
      <Table />
    </section>
  )
}

export default NewCategory
