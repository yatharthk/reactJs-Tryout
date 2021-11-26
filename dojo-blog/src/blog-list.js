import { Link } from "react-router-dom";

const BlogList = (props) => {
    // OR DIRECCLTY DESTRUCTURE THE PROPERTIES INSTEAD OF PROPS LIKE REMOVE PROPS REPLAE WITH {blogsPassed,title}
    // console.log(props);
    
    const blogs=props.blogsPassed; //replace this with const blogs=blogsPassed if using destructure
    const title=props.title;
    // const handleDelete=props.handleDelete;
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
             {
             blogs.map( 
                    (blog) =>(
                    <div className="blog-preview" key={blog.id}>
                        <Link to ={`/create/${blog.id}`}>

                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                        {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
                    </div>
                )
                )
                }
        </div>
    );
}
 
export default BlogList;