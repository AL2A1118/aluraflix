import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'

function NewProduct() {
  const [infoProduct, setInfoProduct] = useState({
    title: '',
    description: '',
    linkVideo: '',
    linkImage: '',
    user: ''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInfoProduct((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(infoProduct)
  }
  const handleClick = () => {
    setInfoProduct({
      title: '',
      linkVideo: '',
      linkImage: '',
      user: '',
      description: ''
    })
  }
  return (
    <section className='flex flex-col gap-4 '>
      <form className='flex flex-col gap-4 ' action='submit'>
        <h2 className='text-xl text-blue-400 font-medium'>Nuevo producto</h2>
        <Input
          name='title'
          label='Título'
          value={infoProduct.title}
          handleChange={handleInputChange}
        />
        <Input
          name='linkVideo'
          label='Link del video'
          value={infoProduct.linkVideo}
          handleChange={handleInputChange}
        />
        <Input
          name='linkImage'
          label='Link imagen del video'
          value={infoProduct.linkImage}
          handleChange={handleInputChange}
        />
        <TextArea
          name='description'
          label='Descripción'
          value={infoProduct.description}
          handleInputChange={handleInputChange}
        />
        <Input
          name='user'
          label='Usuario'
          value={infoProduct.user}
          handleChange={handleInputChange}
        />
        <div className='flex gap-4'>
          <Button name='Guardar' position='left' handleClick={handleSubmit} />
          <Button name='Limpiar' handleClick={handleClick} />
        </div>
      </form>
      <div>
        <Button
          name='Nueva categoría'
          path='/nueva-categoria'
          position='left'
        />
      </div>
    </section>
  )
}

export default NewProduct
