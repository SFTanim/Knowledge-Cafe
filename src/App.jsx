
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Bolgs from './components/Header/Blogs/Bolgs'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    console.log('Bookmark Adding Soon', blog)
  }



  return (
    <section className='lg:container mx-auto'>

      <Header></Header>

      <div className='md:flex'>
        <Bolgs handleAddBookmark={handleAddBookmark}></Bolgs>
        <Bookmarks></Bookmarks>
      </div>
    </section>
  )
}

export default App
