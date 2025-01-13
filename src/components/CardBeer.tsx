

function CardBeers({ key, name, type, price }: { key: number; name: string; type: string; price: number; }) {
	return (

		<div key={key} className="lg:w-1/4 md:w-1/2 p-4 w-full">
			<a className="block relative h-70 rounded overflow-hidden">
				<img alt="ecommerce" className="object-cover object-center w-full h-full block" src="src/assets/lager.jpg" />
			</a>
			<div className="mt-4">
				<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{type}</h3>
				<h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
				<p className="mt-1">{price}€</p>
			</div>
		</div>

	);
}

export default CardBeers;












