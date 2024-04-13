
import MenuItem from "../menu/menuItems";
import SeccionHeaders from "./seccionHeader";

export default function HomeMenu() {
  return (
    <>
      <section >
        
        <SeccionHeaders subHeader={'Check out'}  mainHeader={'Menu'}></SeccionHeaders>

        <div className="grid grid-cols-3 gap-6 px-6 ">
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>

        </div>
      </section>
    </>
  );
}
