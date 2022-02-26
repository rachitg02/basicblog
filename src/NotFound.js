import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>The page cannot be found</p>
            <button>{<Link to='/'>Homepage</Link>}</button>
        </div>
     );
}
 
export default NotFound
;