import { NavLink } from "react-router";
import { Link } from "react-router";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

function Header({title}: {title: string; }) {

    return (

        
        <header className="text-gray-600 body-font bg-green">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span className="ml-3 text-xl text-black text-white">{title}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/bieres" className="mr-5 text-white hover:text-black">Nos Bières</NavLink>
            <NavLink to="/breweries" className="mr-5 text-white hover:text-black" >Nos Brasseries</NavLink>
            <NavLink to="/search" className="mr-5 text-white hover:text-black" ><button className="inline-flex items-center bg-white text-green border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Recherche    <span className="ml-3"><FontAwesomeIcon icon={faMagnifyingGlass} /></span></button></NavLink>
            <NavLink to="/dashboard" className="mr-5 text-white hover:text-black" ><button className="inline-flex items-center bg-lightgreen border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dashboard    <span className="ml-3"><FontAwesomeIcon icon={faScrewdriverWrench} /></span></button></NavLink>
            
        </nav>
            
        </div>
    </header>
    );
}

export default Header;