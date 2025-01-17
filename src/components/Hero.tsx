import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import { Link } from "react-router-dom";

function Hero({}: {}) {
    return (
        <section className="text-gray-600 body-font pb-0">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img id="illus"
                className="object-cover object-center rounded"
                alt="hero"
                src="src/assets/illu.jpg"
                />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className=" font-extrabold title-font sm:text-4xl text-3xl mb-4 text-white">
                Bières
                </h1>
                <br className="hidden lg:inline-block" />
                <h2 className="subtitle-font sm:text-3xl text-2xl mb-4 font-medium text-white">De la belle, de la bonne, de la pas chère</h2>
                <p className="mb-8 leading-relaxed text-white">
                Voyagez à travers le monde grâce à nos bières artisanales,
                sélectionnées pour leur qualité, issue du monde entier, et importé
                avec amour.
                </p>
                <div className="flex justify-center">
		<Link to="/bieres" ><Button text="Nos Bières"/></Link>
        <Link to="/breweries" ><ButtonSecondary text="Nos Brasseries"/></Link>
		
	  </div>
            </div>
            </div>
        </section>
    );
}

export default Hero;
