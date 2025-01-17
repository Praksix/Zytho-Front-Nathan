import BeerForm from '../components/BeerForm';


function AddBeer() {
  return (
    <>
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ajouter une bière</h1>
    <BeerForm/>
    </div>
    </div>
    </>
  );
}



export default AddBeer;