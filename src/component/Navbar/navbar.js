import { Link } from "react-router-dom"
import "./navbar.css"
export const Navbar = () =>{
    return <div>
    <ul className="nav-ul">
     <li><Link to="/addmovies">addMovies</Link></li>
     <li><Link to="/">Movies</Link></li>
    </ul>
        </div>
    
}