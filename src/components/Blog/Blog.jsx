import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark }) => {
    return (
        <div>
            <img src={blog.cover_image} className='rounded-lg min-w-full my-10' alt={`Cover Picture of the title: ${blog.title}`} />

            <div className="flex justify-between items-center my-5">
                <div className="flex items-center gap-5">
                    <img src={blog.author_image} className='h-16 rounded-full' alt="" />
                    <div className="">
                        <h2 className=''>{blog.author}</h2>
                        <p className=''>{blog.posted_date}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <h2>{blog.reading_time} min read</h2>
                    <button><FaRegBookmark
                        className='h-10 text-red-500'
                        onClick={()=>handleAddBookmark(blog)}
                    ></FaRegBookmark></button>
                </div>
            </div>

            <h1 className="text-3xl font-bold my-5">{blog.title}</h1>

            <div className="flex gap-4">
                <p className=""># {blog.hashtags[0]}</p>
                <p className=""># {blog.hashtags[1]}</p>
            </div>

            <a href="#">Mark as read</a>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;