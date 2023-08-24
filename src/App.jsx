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
        {/* <Category title='Front End' color='bg-blue-500' /> */}
        <Banner />
        <Category title='Back End' color='bg-green-500' />
        {/* <NewProduct /> */}
        {/* <NewCategory /> */}
        <Button name='Añadir video' position='left' />
      </main>
      <Footer />
    </>
  )
}

export default App
