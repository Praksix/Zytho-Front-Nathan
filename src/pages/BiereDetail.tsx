import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Beer {
    id_beer: number;
    name: string;
    type: string;
    description: string;
    color: string;
    price: number;
    abv: number;
    liked: boolean;
}

function BiereDetail() {
    const { id } = useParams<{ id: string }>();
    const [beer, setBeer] = useState<Beer | null>(null);

    const fetchBeer = async () => {
        try {
            const response = await fetch(`https://zytho-api-rest-nathan.onrender.com/api/v1/beers/${id}`);
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération de la bière");
            }
            const data = await response.json();
            setBeer(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBeer();
    }, [id]);

    if (!beer) {
        return <div>Loading...</div>;
    }

    const toggleLikeBeer = async () => {
        if (!beer) return;

        const updatedBeer = { ...beer, liked: !beer.liked };

        try {
            const response = await fetch(`https://zytho-api-rest-nathan.onrender.com/api/v1/beers/${beer.id_beer}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedBeer),
            });

            if (response.ok) {
                setBeer(updatedBeer); // Met à jour l’état local pour affichage immédiat
                console.log(`Bière ${beer.id_beer} mise à jour avec liked=${updatedBeer.liked}`);
            } else {
                console.error("Erreur lors de la mise à jour du like");
                const errorText = await response.text();
                console.error("Détails de l'erreur:", errorText);
            }
        } catch (error) {
            console.error("Erreur lors de la requête PUT", error);
        }
    };

    return (
        <section className="text-white body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-lightgreenhover tracking-widest">{beer.type}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{beer.name}</h1>
                        <p className="leading-relaxed mb-4">{beer.description}</p>
                        <div className="flex border-t border-lightgreen py-2">
                            <span className="text-gray-500">Color</span>
                            <span className="ml-auto text-gray-900">{beer.color}</span>
                        </div>
                        <div className="flex border-t border-lightgreen py-2">
                            <span className="text-gray-500">ABV</span>
                            <span className="ml-auto text-gray-900">{beer.abv}%</span>
                        </div>
                        <div className="flex pt-16">
                            <span className="title-font font-medium text-2xl text-gray-900">{beer.price}€</span>
                            <button className="flex ml-auto text-white bg-lightgreen border-0 py-2 px-6 focus:outline-none hover:bg-lightgreenhover rounded">
                                Commander
                            </button>
                            <button
                                onClick={toggleLikeBeer}
                                className={`rounded-full w-10 h-10 ${beer.liked ? "bg-red" : "bg-lightgreen"} p-0 border-0 inline-flex items-center hover:bg-lightgreenhover justify-center text-gray-500 ml-4`}
                            >
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`http://localhost:5173/src/assets/${beer.type}.jpg`} />
                </div>
            </div>
        </section>
    );
}

export default BiereDetail;
