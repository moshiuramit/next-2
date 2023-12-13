import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="bg-sky-400 p-2">
        <Link href="./" className="p-2">
          Home
        </Link>
        <Link href="/users" className="p-2">
          Users
        </Link>
        |
        <Link href="/users/about" className="p-2 font-bold">
          About
        </Link>
        |
        <Link href="/users/products" className="p-2 font-bold">
          Product
        </Link>
      </nav>
    </>
  );
};

export default Nav;
