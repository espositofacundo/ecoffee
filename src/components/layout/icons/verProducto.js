import Image from 'next/image';
export default function VerProducto() {
    return (
      <div>
        <Image
          src="/imagenVer.png" // Ruta relativa a la imagen
          alt="Descripción de la imagen"
          width={20} // Ancho deseado
          height={20} // Alto deseado
          
        />
      </div>
    );
  }