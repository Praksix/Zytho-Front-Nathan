import { NavLink } from "react-router";
import { Link } from "react-router";
import "./Header.css";


function Header({title}: {title: string; }) {

    return (

        
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span className="ml-3 text-xl">{title}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/bieres" className="mr-5 text-gray-500 hover:text-black">Nos Bières</NavLink>
            <NavLink to="/breweries" className="mr-5 text-gray-500 hover:text-black" >Nos Brasseries</NavLink>
        </nav>
            
        </div>
    </header>
    );
}

export default Header;