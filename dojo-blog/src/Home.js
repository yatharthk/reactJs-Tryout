// import {useEffect} from 'react';
import {useState} from 'react';
import BlogList from './blog-list';
import useFetch from './useFetch';
 const Home = () => {
    // let name='mario';
    const [name,setName]=useState('mario');
    const [age,setAge]=useState(25);
    const handleClick=(e)=>{
        // console.log("Hello Ninjas");
        // console.log(e);
        // name='luigi';
        setName('luigi');
        setAge(30);

    }
    // const [blogs,setBlogs]=useState([
    //     {title:'My new website',body:'Lorem Ipsum',author:'mario',id:1},
    //     {title:'Welcome Party',body:'Lorem Ipsum',author:'yoshi',id:2},
    //     {title:'Welcome to dev top tips',body:'Lorem Ipsum',author:'mario',id:3},
    // ]);

    
    // const [blogs,setBlogs]=useState(null);
    // const [error,setError]=useState(null);
    

    // const handleArray=()=>{
    //     return blogs;
    // }

    // const handleClickAgain=(name,e)=>{
    //     console.log("hello "+name,e.target);
    // }

    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }
    
    // implemented custom hook for this whole functionality- down
    // const [name,setName]=useState('mario');
    // const [IsPending,setIsPending]=useState(true);

    // useEffect(()=>{
    //         console.log("use effect ran");
    //         // console.log(name);
    //         setTimeout(()=>{
    //             fetch(" http://localhost:8000/blogs").then(res=>{
    //                 console.log(res);
    //                 if(!res.ok){
    //                     throw Error("could not fetch the data for that resource");
    //                 }
    //             return res.json();
    //         }).then(data=>{
    //             console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch(err=>{
    //             setError(err.message);
    //             console.log(err.message);
    //             setIsPending(false);
                
    //         })
    //         },2000)
    // },[name]);
    //end here

// instead of wrirting isnide a perticular class. use seperate custom hook and call in diff classes where needed.

const {data:blogs,IsPending,error} = useFetch("http://localhost:8000/blogs");

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        
            {/* <button onClick={()=>{handleArray}}></button> */}
            <div>
                {error && <div>{error}</div>}
                { IsPending && <div>Loading ...</div>}
               {blogs && <BlogList blogsPassed={blogs} title="All blogs!" 
               ></BlogList>}
               {/* handleDelete={handleDelete} */}
               {/* <BlogList blogsPassed={blogs.filter((blog)=>
                    blog.author==='mario'
               )} title="Mario's blogs!" handleDelete={handleDelete}></BlogList>*/}
            </div>
            {/* <button onClick={(e)=>handleClickAgain('Mario',e)}> Click Me</button> */}
            <button onClick={()=>setName('luigi')}>Change nAME</button>
            <p>{name}</p>
        </div>


    );
}
 
export default Home;
