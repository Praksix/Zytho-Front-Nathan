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
            <Link to={`/BiereDetail/${id_beer}`} className="block relative h-70 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`http://localhost:5173/src/assets/${type}.jpg`} />
            </Link>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{type}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{name} <span className="text-gray-400 font-thin">- {abv}%</span></h2>
                <p className="mt-1">{price}€</p>
            </div>
        </div>
    );
}

export default CardBeers;