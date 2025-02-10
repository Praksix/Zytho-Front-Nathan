import { Link } from "react-router-dom";

interface CardBeersProps {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
    liked: boolean;
}

function CardBeers({ id_beer, name, type, price, abv, liked }: CardBeersProps) {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2">
            <Link to={`/BiereDetail/${id_beer}`} className="block relative h-70 rounded overflow-hidden ">
            {liked && (
            <button
                                className="rounded-full w-10 h-10  absolute mt-4  p-0 border-0 inline-flex items-center bg-red opacity-80 justify-center text-gray-500 ml-4">
                                <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
            </button>)}

                <img  alt="ecommerce" className="object-cover hover:border-4 hover: border-green object-center w-full h-full block hover:h-full" src={`http://localhost:5173/src/assets/${type}.jpg`} />
                
            <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">{type}</h3>
                <h2 className="text-white title-font text-lg font-medium hover:b">{name} <span className="text-gray-400 font-thin">- {abv}%</span></h2>
                <p className="mt-1 text-white">{price}€</p>
            </div>
            </Link>
            </div>
    
    );
}

export default CardBeers;