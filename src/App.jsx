
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Bolgs from './components/Header/Blogs/Bolgs'
import Header from './components/Header/Header'

function App() {
  return (
    <section className='lg:container mx-auto'>

      <Header></Header>

      <div className='md:flex'>
        <Bolgs></Bolgs>
        <Bookmarks></Bookmarks>
      </div>
    </section>
  )
}

export default App
