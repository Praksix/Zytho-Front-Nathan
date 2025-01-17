import { Link } from "react-router-dom";

interface CardBeersProps {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
}

function CardBeers({ id_beer, name, type, price, abv }: CardBeersProps) {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2">
            <Link to={`/BiereDetail/${id_beer}`} className="block relative h-70 rounded overflow-hidden ">
                <img  alt="ecommerce" className="object-cover hover:border-4 hover: border-green object-center w-full h-full block hover:h-full" src={`http://localhost:5173/src/assets/${type}.jpg`} />
            </Link>
            <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">{type}</h3>
                <h2 className="text-white title-font text-lg font-medium hover:b">{name} <span className="text-gray-400 font-thin">- {abv}%</span></h2>
                <p className="mt-1 text-white">{price}€</p>
            </div>
        </div>
    );
}

export default CardBeers;