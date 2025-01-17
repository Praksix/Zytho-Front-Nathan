import { useEffect, useState } from "react";
import OptionBrewery from "./OptionBrewery";
import ButtonSubmit from "./ButtonSubmit";


interface Brewery {
    id_brewery: number;
    name: string;
}

function BeerForm({ }: {}) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [id_brewery, setIdBrewery] = useState('');
    const [abv, setAbv] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
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

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const beerData = {
            name,
            description,
            abv,
            type,
            color,
            price,
            id_brewery,
            id_category: 1,
            
        };

        try {
            const response = await fetch('http://localhost:3004/api/v1/beers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(beerData),
            });

            if (response.ok) {
                console.log('Beer data submitted successfully');
            } else {
                const errorData = await response.json();
                console.error('Failed to submit beer data', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center mx-10">
            <form className="w-full max-w-lg my-10" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Nom
                        </label>
                        <input className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whitehover" type="text" placeholder="nom de la bière" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="w-full md:w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Type
                        </label>
                        <input className="appearance-none bg-white block w-full  text-green border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500" type="text" placeholder="IPA, Sour, Stout ..." value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Description
                        </label>
                        <input className="appearance-none bg-white block w-full text-green border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500" placeholder="Raconte son histoire" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Couleur
                        </label>
                        <input className="appearance-none bg-white block w-full text-green border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500" type="text" placeholder="Blonde, blanche, ambrée ..." value={color} onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Brasserie
                        </label>
                        <div className="relative">
                            <select value={id_brewery} onChange={(e) => setIdBrewery(e.target.value)} className="block text-green bg-white appearance-none w-full border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500">
                                {brewery.map((brewery: Brewery) => (
                                    <option key={brewery.id_brewery} value={brewery.id_brewery}>
                                    {brewery.name}
                                </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            ABV
                        </label>
                        <input className="appearance-none bg-white block w-full text-green border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500" type="text" placeholder="%" value={abv} onChange={(e) => setAbv(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Prix
                        </label>
                        <input className="appearance-none bg-white block w-full text-green border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500" type="text" placeholder="€" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="w-full md:w-full px-0 mb-6 md:mb-0 mt-6">
                    <ButtonSubmit text="Créer" />
                </div>
            </form>
        </div>
    );
}

export default BeerForm;