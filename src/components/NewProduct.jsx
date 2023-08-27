import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'

function NewProduct() {
  const [infoProduct, setInfoProduct] = useState({
    title: '',
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
  const handleSubmit = () => {}
  return (
    <section className='flex flex-col gap-4 '>
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
      <TextArea label='Descripción' />
      <Input
        name='user'
        label='Usuario'
        value={infoProduct.user}
        handleChange={handleInputChange}
      />
      <div className='flex gap-4'>
        <Button name='Guardar' position='left' handleSubmit={handleSubmit} />
        <Button name='Limpiar' />
      </div>
    </section>
  )
}

export default NewProduct
