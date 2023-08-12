import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'

function NewProduct() {
  return (
    <section className='flex flex-col gap-4 '>
      <h2 className='text-xl text-blue-400 font-medium'>Nuevo producto</h2>
      <Input label='Título' />
      <Input label='Link del video' />
      <Input label='Link imagen del video' />
      <TextArea label='Descripción' />
      <Input label='Usuario' />
      <div className='flex gap-4'>
        <Button name='Guardar' position='left' />
        <Button name='Limpiar' />
      </div>
    </section>
  )
}

export default NewProduct
