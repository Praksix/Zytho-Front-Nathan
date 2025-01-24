import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modals from "../components/Modals";

interface LigneBeerProps {
    id_beer: number;
    name: string;
    type: string;
    price: number;
    abv: number;
}

const LigneBeer: React.FC<LigneBeerProps> = ({ id_beer, name, type, price, abv }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const deleteBeer = async (id_beer: number) => {
        setOpen(false);
        try {
            const response = await fetch(`http://localhost:3004/api/v1/beers/${id_beer}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log(`Bière avec l'id ${id_beer} supprimée`);
                setAlertMessage("La bière a été supprimée avec succès !");
                navigate(0);
        
            } else {
                console.error('Erreur lors de la suppression de la bière');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de la bière', error);
        }
    };

    return (
        <>
            {alertMessage && (
                <div className=" fixed inset-0 flex justify-center items-center bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
                    {alertMessage}
                </div>
            )}
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
                    <Modals open={open} onClose={() => setOpen(false)}>
                        <div className="text-center w-56">
                            <div className="mx-auto my-4 w-48">
                                <h3 className="text-lg font-black text-black">Supprimer ?</h3>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => deleteBeer(id_beer)} className="btn btn-danger w-full bg-white text-green pb-2 pt-2 rounded">Supprimer</button>
                                <button
                                    className="btn btn-dark w-full bg-lightgreen text-white rounded"
                                    onClick={() => setOpen(false)}
                                >
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </Modals>
                    <a onClick={() => setOpen(true)} className="cursor-pointer px-4 py-1 text-sm text-white bg-lightgreen rounded-full">Delete</a>
                </td>
            </tr>
        </>
    );
}

export default LigneBeer;
