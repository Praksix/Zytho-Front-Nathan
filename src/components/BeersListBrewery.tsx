import { useState, useEffect } from "react";
import CardBeer from "./CardBeer";

interface Beer {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    id_brewery: number;
    abv: number;
    liked: boolean;
}

interface Props {
    id: number;
}

function BeerListBrewery({ id }: Props) {
    const [beers, setBeers] = useState<Beer[]>([]);
    
    useEffect(() => {
        fetchBeers();
    }, [id]);

    const fetchBeers = async () => {
        console.log("fetchBeers");

        // On récupère les données
        const response = await fetch(`https://zytho-api-rest-nathan.onrender.com/api/v1/Beers/brewery/${id}`);

        // On transforme les données en JSON
        const data = await response.json();

        // On filtre les bières par id_brewery
        const filteredBeers = data.filter((beer: Beer) => beer.id_brewery === id);

        // On met les données dans le state
        setBeers(filteredBeers);
    };

    return (
        <div>
            <section className="text-gray-600 body-font bg-lightgreen">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white text-left uppercase pb-10">Leurs Bières</h1>
                    <div className="flex flex-wrap -m-4">
                        {beers.map((beer: Beer) => {
                            return <CardBeer key={beer.id_beer} id_beer={beer.id_beer} name={beer.name} type={beer.type} price={beer.price} abv={beer.abv} liked={beer.liked}/>;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BeerListBrewery;