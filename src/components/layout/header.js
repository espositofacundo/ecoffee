import Link from "next/link";

export default function Header() {
  return (
    <header className="flex intems-center justify-between p-4 bg-black">
      <nav className="flex items-center gap-8 text-green-200 font-semibold ">
        <Link className="text-white font-semibold text-2xl" href="/">
          E - coffee
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>contact</Link>
      </nav>
      
      <nav className="flex item center gap-8 font-semibold">
        <Link
          className="bg-green-900 w-28 text-center py-2 text-white rounded-full"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className="bg-green-900 w-28 text-center p-2 text-white rounded-full"
          href={"/registrate"}
        >
          Registrate
        </Link>
      </nav>
    </header>
  );
}
