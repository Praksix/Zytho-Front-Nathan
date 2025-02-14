import { useState, useEffect } from "react";
import LigneBeer from "./LigneBeer";
import { Link } from "react-router-dom";


interface Beer {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
}

function TableBeers() {




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






        
        <section className="text-gray-600 body-font">
            <div className="container px-20 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Gestion des bières</h1>
                    <Link to="/AddBeer"> <button className="bg-lightgreen hover:bg-blue-700 text-white font-light mt-5 py-2 px-4 rounded text-sm"> + Ajouter une bière</button></Link>

                </div>
                <div className="container flex justify-center mx-auto rounded-full">
                    <div className="flex flex-col rounded-full">
                        <div className="w-full rounded-full">
                            <div className="border-b border-lightgreen shadow rounded-full">
                                <table className="divide-y divide-green rounded-full">
                                    <thead className="bg-green rounded-full">
                                        <tr className="rounded">
                                            <th className="px-6 text-left py-2 text-xs rounded text-lightgreen">
                                                Nom
                                            </th>
                                            <th className="px-6 text-left py-2 text-xs rounded text-lightgreen">
                                                Type
                                            </th>
                                            <th className="px-6 text-left py-2 text-xs rounded text-lightgreen">
                                                ABV
                                            </th>
                                            <th className="px-6 text-left py-2 text-xs rounded text-lightgreen">
                                                Prix
                                            </th>
                                            <th className="px-6 text-left py-2 text-xs rounded text-lightgreen">
                                                Modifier
                                            </th>
                                            <th className="px-6 text-left py-2 text-xs rounded text-lightgreen">
                                                Supprimer
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-300">

                                    {beer.map((beer: Beer) => {
                    return  <LigneBeer id_beer={beer.id_beer} name={beer.name} type={beer.type} price={beer.price} abv={beer.abv} />;
                })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            /</section>
    );
}

export default TableBeers;