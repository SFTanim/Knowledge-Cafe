import PropTypes from 'prop-types';
import Bookmark from './../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 text-center p-6 my-10">
            <div className=" p-6 mb-6 bg-slate-400 border-2 rounded-xl">
                <h3 className="text-3xl ">Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="text-3xl mr-6">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;