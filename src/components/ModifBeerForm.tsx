import ButtonSubmit from "./ButtonSubmit";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

interface Brewery {
    id_brewery: number;
    name: string;
}

interface Beer {
    id_beer: number;
    name: string;
    type: string;
    description: string;
    color: string;
    price: number;
    abv: number;
    id_brewery: number;
}

function ModifBeerForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [id_brewery, setIdBrewery] = useState("");
    const [abv, setAbv] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [brewery, setBreweries] = useState<Brewery[]>([]);
    const { id } = useParams<{ id: string }>();
    const [beer, setBeer] = useState<Beer | null>(null);

    useEffect(() => {
        fetchBreweries();
        fetchBeer();
    }, [id]);

    const fetchBreweries = async () => {
        try {
            const response = await fetch("http://localhost:3004/api/v1/breweries");
            const data = await response.json();
            setBreweries(data);
        } catch (error) {
            console.error("Error fetching breweries:", error);
        }
    };

    const fetchBeer = async () => {
        try {
            const response = await fetch(`http://localhost:3004/api/v1/beers/${id}`);
            const data = await response.json();
            setBeer(data);

            // Initialize state with beer data
            setName(data.name);
            setType(data.type);
            setDescription(data.description);
            setColor(data.color);
            setPrice(data.price.toString());
            setAbv(data.abv.toString());
            setIdBrewery(data.id_brewery.toString());
        } catch (error) {
            console.error("Error fetching beer:", error);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        
        event.preventDefault();

        const beerData = {
            name,
            type,
            description,
            color,
            price: parseFloat(price),
            abv: parseFloat(abv),
            id_brewery: parseInt(id_brewery),
        };

        try {
            const response = await fetch(`http://localhost:3004/api/v1/beers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(beerData),
            });

            if (response.ok) {
                console.log("Beer data submitted successfully");
                navigate("/ctrlbeers");
            } else {
                const errorData = await response.json();
                console.error("Failed to submit beer data", errorData);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    if (!beer) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center mx-10">
            <form className="w-full max-w-lg my-10" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Nom
                        </label>
                        <input
                            className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-gray-100"
                            type="text"
                            placeholder="Nom de la bière"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Type
                        </label>
                        <input
                            className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-gray-100"
                            type="text"
                            placeholder="IPA, Sour, Stout..."
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Description
                        </label>
                        <textarea
                            className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-gray-100"
                            placeholder="Raconte son histoire"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Couleur
                        </label>
                        <input
                            className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-gray-100"
                            type="text"
                            placeholder="Blonde, blanche, ambrée..."
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Brasserie
                        </label>
                        <div className="relative"></div>
                        <select
                            className="block text-green bg-white appearance-none w-full border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-whitehover focus:border-gray-500"
                            value={id_brewery}
                            onChange={(e) => setIdBrewery(e.target.value)}
                        >
                            {brewery.map((brewery) => (
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
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            ABV
                        </label>
                        <input
                            className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-gray-100"
                            type="text"
                            placeholder="%"
                            value={abv}
                            onChange={(e) => setAbv(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                            Prix
                        </label>
                        <input
                            className="appearance-none bg-white block w-full text-green border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-gray-100"
                            type="text"
                            placeholder="€"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <ButtonSubmit text="Modifier" />
                </div>
            </form>
        </div>
    );
}

export default ModifBeerForm;
