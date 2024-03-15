import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

const Bolgs = ({handleAddBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl font-semibold ">All Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    handleAddBookmark={handleAddBookmark}
                    key={blog.id} 
                    blog={blog}
                    > </Blog>)
            }
        </div>
    );
};

export default Bolgs;