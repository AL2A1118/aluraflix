import { Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Button from './components/Button'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import NewCategory from './components/NewCategory'
import NewProduct from './components/NewProduct'

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col w-full justify-center gap-8 p-4 max-w-4xl mx-auto'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Banner />
                <Category title='Back End' color='bg-green-500' />
                <Button
                  name='Añadir video'
                  position='left'
                  path='/nuevo-video'
                  handle
                />
              </>
            }
          />
          <Route path='/nuevo-video' element={<NewProduct />} />
          <Route path='/nueva-categoria' element={<NewCategory />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
