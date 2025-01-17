import { Link, redirect, useNavigate } from "react-router-dom";

interface LigneBeerProps {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
}


    const LigneBeer: React.FC<LigneBeerProps> = ({ id_beer, name, type, price, abv }) => {
        const navigate = useNavigate();


        const deleteBeer = async (id_beer: number) => {
            try {
                const response = await fetch(`http://localhost:3004/api/v1/beers/${id_beer}`, {
                    method: 'delete',
                });
                if (response.ok) {
                    console.log(`Bière avec l'id ${id_beer} supprimée`);
                    navigate(0);

                    
                } else {
                    console.error('Erreur lors de la suppression de la bière');
                }
            } catch (error) {
                console.error('Erreur lors de la suppression de la bière', error);
            }
        };


    return (
        <tr key={id_beer} className="whitespace-nowrap border-b border-green">
                                            <td className="px-6 py-4 text-sm text-green">
                                                {name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-green">
                                                {type}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-green">{abv} %</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-green">
                                            {price}€
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`/modifbeer/${id_beer}`} className="cursor-pointer px-4 py-1 text-sm text-white bg-lightgreen rounded-full">Edit</Link>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a onClick={() => deleteBeer(id_beer)} className=" cursor-pointer px-4 py-1 text-sm text-white bg-lightgreen rounded-full">Delete</a>
                                            </td>
                                        </tr>
    );
}

export default LigneBeer;