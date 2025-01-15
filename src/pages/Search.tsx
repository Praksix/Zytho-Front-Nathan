import { useEffect, useState, ChangeEvent } from 'react';
import CardBeer from '../components/CardBeer';

interface Beer {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
}

function Search() {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [inputValue, setInputValue] = useState('');
    const [filteredBeers, setFilteredBeers] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3004/api/v1/Beers")
            .then((response) => response.json())
            .then((json) => {
                setBeers(json);
            });
    }, []);

    const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setFilteredBeers([]);
        setSearchTerm(value);
        setInputValue(value);

    };

  
    const handleFilterIpa = () => {
        const ipa = beers.filter(beer => beer.type == "IPA"); 
        setSearchTerm(".");
        setFilteredBeers([]);
        setFilteredBeers(ipa);
        
        
    };

    const handleFilterCheapBeers = () => {
        const cheapBeers = beers.filter(beer => beer.price < 5); 
        setSearchTerm(".");
        setFilteredBeers([]);
        setFilteredBeers(cheapBeers);
        
        
    };

    const handleFilterStrong = () => {
        
        const strongBeers = beers.filter(beer => beer.abv > 6); 
        setSearchTerm(".");
        setFilteredBeers([]);
        setFilteredBeers(strongBeers);
        
    };


    console.log(searchTerm);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pt-24 pb-3 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-full lg:pl-0 md:pl-0 flex flex-col md:items-center md:text-center items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Recherche</h1>
                        <div className="flex w-full md:justify-center justify-center items-end">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                <input type="text" id="hero-field" name="hero-field" placeholder="Quelle sera votre bière ?" onChange={handleSearchTerm} value={inputValue} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-0 py-0 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-full lg:pl-0 md:pl-0 flex flex-col md:items-center md:text-center items-center text-center">
                        <div className="flex w-full md:justify-center justify-center items-end">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-medium py-2 px-4 ml-2 mr-2 mb-4 rounded-full" value="ipa" onClick={handleFilterIpa}>IPA</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-medium py-2 px-4 ml-2 mr-2 mb-4 rounded-full" onClick={handleFilterCheapBeers}>Pas chères</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-medium py-2 px-4 ml-2 mr-2 mb-4 rounded-full" onClick={handleFilterStrong}>Les bières fortes</button>
                            </div>
                        </div>
                        
                    </div>


                    


                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-0 mx-auto">
                    <div className="flex flex-wrap">

                    <div id="bg" className ="flex justify-center items-center w-full" style={{ display: searchTerm && filteredBeers ? 'none' : 'block' }} >
                    <img
                        className="object-cover object-center rounded h-96 m-auto" id="bg"
                        alt="hero"
                        src="src/assets/bg.jpg"
                        /> 
                    </div>
                        {searchTerm && beers
                            .filter((val) => {
                                return val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.type.toLowerCase().includes(searchTerm.toLowerCase());
                            })
                            .map((val) => {
                                return <CardBeer key={val.id_beer} id_beer={val.id_beer} name={val.name} type={val.type} price={val.price} abv={val.abv} />
                            })
                        }

                        {filteredBeers
                            .map((val) => {
                                return <CardBeer key={val.id_beer} id_beer={val.id_beer} name={val.name} type={val.type} price={val.price} abv={val.abv}/>
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;