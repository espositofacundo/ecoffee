import Image from "next/image";

export default function SeccionHeaders ({subHeader,mainHeader}) {

    return(
        <>
        <div className="relative h-14">
          <Image
            src={"/caf.jpg"}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"} // Esto asegura que la imagen esté centrada
            alt="sallat"
          ></Image>
        </div>

        <div className="text-center py-2">
          <h3 className="uppercase text-green-800 font-semibold leading-4">
            {subHeader}
          </h3>
          <h2 className="font-bold text-amber-900 text-4xl">{mainHeader}</h2>
        </div>
        </>
    )
}