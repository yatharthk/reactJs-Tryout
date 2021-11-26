import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/"> Home</a>
                <a href="/create"> New Blog</a> */}
                {/* the href is making a request to server so we need ot intercept
                this and add a special Link tag provided by react to take control and just re` direct.back with the page
                instead of getting from server. */}
                    
                    
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                    
            </div>

        </nav>


    );
}
 
export default Navbar;

