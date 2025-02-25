import { useState, useEffect } from "react";
import CardBeers from "./CardBeer";

interface Beer {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
    liked: boolean;
}

function BeerList() {
    const [beer, setBeers] = useState<Beer[]>([]);

    useEffect(() => {
        fetchBeers();
    }, []);

    const fetchBeers = async () => {
        console.log("fetchBeers");

        // On récupère les données
        const response = await fetch("https://zytho-api-rest-nathan.onrender.com/api/v1/Beers");

        // On transforme les données en JSON
        const data = await response.json();

        // On met les données dans le state
        setBeers(data);
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 text-center uppercase pb-10">Nos Bières</h1>
    <div className="flex flex-wrap -m-4">
                {beer.map((beer: Beer) => {
                    return  <CardBeers id_beer={beer.id_beer} name={beer.name} type={beer.type} price={beer.price} abv={beer.abv} liked={beer.liked} />;
                })}
            
        </div>
        </div>
        </section>
        </div>
    );
}

export default BeerList;