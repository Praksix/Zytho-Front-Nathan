import { Link } from "react-router";

function CardBreweries({ id_brewery, name, country, city }: { id_brewery: number; name: string; country: string; city: string; }) {
	return (

		<div className="lg:w-1/2 md:w-1/2 p-4 w-full">
			<Link to={`/BreweryDetail/${id_brewery}`}className="block relative h-70 rounded overflow-hidden">
				<img alt="ecommerce" className="object-cover object-center w-full h-40 block" src="src/assets/brewery.jpg" />
			</Link>
			<div className="mt-4">
				<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{country}</h3>
				<h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
				<p className="mt-1">{city}</p>
			</div>
		</div>

	);
}

export default CardBreweries;












