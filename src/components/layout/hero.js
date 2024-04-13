
import Right from "./icons/right";
import Instagram from "./icons/instagram";

export default function Hero() {
  return (
    <>
      <section className="grid grid-cols-10 px-4 h-max">
        <div className="py-12 col-span-2">
          <h1 className="text-4xl font-semibold text-green-800">
            It´s time to breack
          </h1>
          <p className="my-4 text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>

          <div className="flex gap-4 text-sm">
            <button className="bg-amber-900 text-white px-8 py-4 rounded-full items-center flex gap-2">
              Order  <Right />
            </button>
            
          </div>
        </div>

        <div className="items-center flex gap-2 font-semibold col-span-8 ">
         
          <div className="w-full m-10 ">
            <h1>Lo nuevo llego, te lo vas a perder?</h1>
            <Instagram></Instagram>
          </div>
        </div>
      </section>
    </>
  );
}
