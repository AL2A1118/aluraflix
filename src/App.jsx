import Category from './components/Category'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-8 p-4'>
        <Category title='Front End' color='bg-blue-500' />
        <Category title='Back End' color='bg-green-500' />
      </main>
    </>
  )
}

export default App
