import Image from 'next/image';
export default function ImagenDePrueba() {
    return (
      <div>
        <Image
          src="/tomamosuncafe.jpg" // Ruta relativa a la imagen
          alt="Descripción de la imagen"
          width={250} // Ancho deseado
          height={250} // Alto deseado
        />
      </div>
    );
  }

  