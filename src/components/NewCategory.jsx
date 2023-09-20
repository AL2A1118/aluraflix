import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Table from './Table'
import TextArea from './TextArea'

function NewCategory() {
  const [infoCategory, setInfoCategory] = useState({
    title: '',
    color: '',
    description: '',
    user: ''
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
    console.log(infoCategory)
  }
  const handleClick = () => {
    setInfoCategory({
      title: '',
      color: '',
      description: '',
      user: ''
    })
  }
  return (
    <section className='flex flex-col gap-4'>
      <form className='flex flex-col gap-4' action='submit'>
        <h2 className='text-xl text-blue-400 font-medium'>Nuevo producto</h2>
        <Input
          label='Título'
          name='title'
          value={infoCategory.title}
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
          name='description'
          value={infoCategory.description}
          handleInputChange={handleOnChange}
        />
        <Input
          label='Usuario'
          name='user'
          value={infoCategory.user}
          handleChange={handleOnChange}
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
