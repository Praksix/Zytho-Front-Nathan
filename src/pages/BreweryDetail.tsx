import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BeersListBrewery from "../components/BeersListBrewery";
import ButtonSecondary from "../components/ButtonSecondary";

interface Brewery {
    id_brewery: number;
    name: string;
    city: string;
    country: string;
    description: string;
    url_website: string;
}

function BiereDetail() {
	const { id } = useParams<{ id: string }>();

	const [brewery, setBrewery] = useState<Brewery | null>(null);

	const fetchBrewery = async () => {
		const response = await fetch(
			`https://zytho-api-rest-nathan.onrender.com/api/v1/breweries/${id}`
		);
		const data = await response.json();
		console.log(data)
		setBrewery(data);
	};

	useEffect(() => {
		fetchBrewery();
	}, [id]);



	if (!brewery) {
        return <div>Loading...</div>;
    }




	return (
		<>
			<section className="text-white body-font overflow-hidden ">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded" src="../src/assets/brewery.jpg" />
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">{brewery.country}</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{brewery.name}</h1>
							<div className="flex mb-4 ml-0">
									<span className="text-gray-600">{brewery.city}</span>
								
								
							</div>
							<p className="leading-relaxed">{brewery.description}</p>
							
							
							<div className="flex mt-10">
							<ButtonSecondary text={brewery.url_website}/>
								
					
							</div>
						</div>
					</div>
				</div>
			</section>

			<BeersListBrewery id={brewery.id_brewery} />

		</>
	);
}



export default BiereDetail;