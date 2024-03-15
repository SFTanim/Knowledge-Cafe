import { useEffect, useState } from "react";

const Bolgs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Bolgs;