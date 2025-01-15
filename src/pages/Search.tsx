import React, { useEffect, useState, ChangeEvent } from 'react';
import CardBeer from '../components/CardBeer';

interface Beer {
    id_beer: number;
    name: string;
    type: string;
    price: number;
}

function Search() {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");


    useEffect(() => {
        fetch("http://localhost:3004/api/v1/Beers")
            .then((response) => response.json())
            .then((json) => {
                setBeers(json);
            });
    }, []);

    const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setSearchTerm(value);
    };

    console.log(searchTerm);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-full lg:pl-0 md:pl-0 flex flex-col md:items-center md:text-center items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Recherche</h1>
                        <div className="flex w-full md:justify-center justify-center items-end">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                <input type="text" id="hero-field" name="hero-field" placeholder="Quelle sera votre bière ?" onChange={handleSearchTerm} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-0 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {searchTerm && beers
                            .filter((val) => {
                                return val.name.toLowerCase().includes(searchTerm.toLowerCase()), val.type.toLowerCase().includes(searchTerm.toLowerCase());
                            })
                            .map((val) => {
                                return <CardBeer key={val.id_beer} id_beer={val.id_beer} name={val.name} type={val.type} price={val.price} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;