<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
=======
import Banner from './components/Banner'
>>>>>>> 72ff199ffe5e488f3674e726defa81e76bb497aa
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
<<<<<<< HEAD
        <Routes>
          <Route
            path='/'
            element={
              <>
                {/* <Category title='Front End' color='bg-blue-500' /> */}
                <Category title='Back End' color='bg-green-500' />
                {/* */}
                {/* <NewCategory /> */}
                <Button
                  name='Añadir video'
                  position='left'
                  path='/nuevo-video'
                />
              </>
            }
          />
          <Route path='/nuevo-video' element={<NewProduct />} />
          <Route path='/nueva-categoria' element={<NewCategory />} />
        </Routes>
=======
        {/* <Category title='Front End' color='bg-blue-500' /> */}
        <Banner />
        <Category title='Back End' color='bg-green-500' />
        <NewProduct />
        {/* <NewCategory /> */}
        <Button name='Añadir video' position='left' />
>>>>>>> 72ff199ffe5e488f3674e726defa81e76bb497aa
      </main>
      <Footer />
    </>
  )
}

export default App
