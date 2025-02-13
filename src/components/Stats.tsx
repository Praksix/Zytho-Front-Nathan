import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Stats({ }: {}) {

    const [beerCount, setBeerCount] = useState<number>(0);

    useEffect(() => {
        fetchBeers();
    }, []);

    const fetchBeers = async () => {
        console.log("fetchBeers");

        // On récupère les données
        const response = await fetch("http://localhost:3004/api/v1/Beers");

        // On transforme les données en JSON
        const data = await response.json();

        // On compte les données
        const count = data.length;
        setBeerCount(count);
    };

    const [breweryCount, setBreweryCount] = useState<number>(0);

    useEffect(() => {
        fetchBreweries();
    }, []);

    const fetchBreweries = async () => {
        console.log("fetchBreweies");

        // On récupère les données
        const response = await fetch("http://localhost:3004/api/v1/Breweries");

        // On transforme les données en JSON
        const data = await response.json();

        // On compte les données
        const count = data.length;
        setBreweryCount(count);
    };

    const [UserCount, setUserCount] = useState<number>(0);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        console.log("fetchBreweies");

        // On récupère les données
        const response = await fetch("http://localhost:3004/api/v1/Users");

        // On transforme les données en JSON
        const data = await response.json();

        // On compte les données
        const count = data.length;
        setUserCount(count);
    };


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-20 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Centre de contrôle</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Ici tu peux gérer les données</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">

                            <h2 className="title-font font-medium text-3xl text-gray-900">{beerCount}</h2>
                            <p className="leading-relaxed">Bières</p>
                            <Link to="/ctrlbeers"> <button className="bg-lightgreen hover:bg-blue-700 text-white font-light mt-5 py-2 px-4 rounded text-sm">Modifier</button></Link>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">

                            <h2 className="title-font font-medium text-3xl text-gray-900">{breweryCount}</h2>
                            <p className="leading-relaxed">Brasseries</p>
                            <button className="bg-lightgreen hover:bg-blue-700 text-white font-light mt-5 py-2 px-4 rounded text-sm">Modifier</button>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">

                            <h2 className="title-font font-medium text-3xl text-gray-900">{UserCount}</h2>
                            <p className="leading-relaxed">Utilisateurs</p>
                            <button className="bg-lightgreen hover:bg-blue-700 text-white font-light mt-5 py-2 px-4 rounded text-sm">Modifier</button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Stats;
