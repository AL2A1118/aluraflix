import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'
import { v4 as uuidv4 } from 'uuid'
import { postDataApi } from '../services/servicesApi'
import SelectCategory from './SelectCategory'
const URL_VIDEOS = 'http://localhost:3000/videos'

function NewVideo() {
  const [infoVideo, setInfoVideo] = useState({
    titulo: '',
    descripcion: '',
    video: '',
    imagen: '',
    categoria: ''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInfoVideo((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newVideo = {
      id: uuidv4(),
      ...infoVideo
    }
    postDataApi(URL_VIDEOS, newVideo)
  }
  const handleClick = () => {
    setInfoVideo({
      titulo: '',
      video: '',
      imagen: '',
      descripcion: '',
      categoria: ''
    })
  }
  return (
    <section className='flex flex-col gap-4 mt-10'>
      <form className='flex flex-col gap-4 ' action='submit'>
        <h2 className='text-xl text-blue-400 font-medium'>Nuevo producto</h2>
        <Input
          name='titulo'
          label='Título'
          value={infoVideo.titulo}
          handleChange={handleInputChange}
        />
        <SelectCategory setInfoVideo={setInfoVideo} infoVideo={infoVideo} />
        <Input
          name='video'
          label='Link del video'
          value={infoVideo.video}
          handleChange={handleInputChange}
        />
        <Input
          name='imagen'
          label='Link imagen del video'
          value={infoVideo.imagen}
          handleChange={handleInputChange}
        />
        <TextArea
          name='descripcion'
          label='Descripción'
          value={infoVideo.descripcion}
          handleInputChange={handleInputChange}
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

export default NewVideo
