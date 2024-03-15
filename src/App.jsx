
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Bolgs from './components/Header/Blogs/Bolgs'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    // console.log('Reading Done', time);
    // console.log('Reading Done', id);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <section className='lg:container mx-auto'>

      <Header></Header>

      <div className='md:flex'>
        <Bolgs
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Bolgs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </section>
  )
}

export default App
