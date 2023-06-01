import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Page not Found</h2>
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default NotFound;