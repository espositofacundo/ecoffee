import ImagenDePrueba from "../imagenprueba";
import ImagenCarrito from "../layout/icons/carrito";
import Right from "../layout/icons/right";
import VerProducto from "../layout/icons/verProducto";

export default function MenuItem() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center bg-gray-300 p-4 mx-6 rounded-lg text-center w-full h-96 hover:bg-white hover:shadow-2xl hover:shadow-dark transition-all group">
          <ImagenDePrueba></ImagenDePrueba>
          <h4 className="font-semibold my-2">algun texto</h4>
          <p className="text-gray-500 text-sm pb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className="flex justify-center gap-3">
          <button className="bg-amber-900 text-white mt-6 px-4 py-2 rounded-full w-36  flex items-center gap-2 justify-center">
            Ver más <VerProducto></VerProducto>
          </button>
          <button className="bg-green-800 text-white mt-6 px-4 py-2 rounded-full flex items-center w-36 gap-2 justify-center">
            15$ <ImagenCarrito></ImagenCarrito>
          </button>

          </div>
          
        </div>
      </div>
    </>
  );
}
