import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar  = () =>{
    return(
        <nav className="navbar">
            <h1>TO DO LIST</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Activity</Link>
                <Link to="/history">Recently Deleted</Link>
            </div>
        </nav>
        
    );
}

export default Navbar  