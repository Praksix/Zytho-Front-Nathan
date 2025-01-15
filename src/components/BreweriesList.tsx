import { useState, useEffect } from "react";
import CardBreweries from "./CardBreweries";

interface Brewery {
    id_brewery: number;
    name: string;
    country: string;
    city: string;
}

function BreweriesList() {
    const [brewery, setBreweries] = useState<Brewery[]>([]);

    useEffect(() => {
        fetchBreweries();
    }, []);

    const fetchBreweries = async () => {
        console.log("fetchBreweries");

        // On récupère les données
        const response = await fetch("http://localhost:3004/api/v1/breweries");

        // On transforme les données en JSON
        const data = await response.json();

        // On met les données dans le state
        setBreweries(data);
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 text-center uppercase pb-10">Nos Brasseries</h1>
    <div className="flex flex-wrap -m-4">
                {brewery.map((brewery: Brewery) => {
                    return <CardBreweries id_brewery={brewery.id_brewery} name={brewery.name} country={brewery.country} city={brewery.city} />;
                })}
            
        </div>
        </div>
        </section>
        </div>
    );
}

export default BreweriesList;