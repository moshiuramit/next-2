import Link from "next/link";

const Nav = () => {
  return (
    <>
      <header className="bg-orange-200 flex items-center gap-x-6 max-w-7xl w-full justify-center">
        <nav className="flex text-center" aria-label="Global">
            <Link href="./" className="p-3 border-r-2 text-center">
              Home
            </Link>
            <Link href="/users" className="p-3 border-r-2 text-center">
              Users
            </Link>
            <Link href="/users/about" className="p-3 font-bold border-r-2 text-center">
              About
            </Link>
            <Link href="/users/products" className="p-3 font-bold border-r-2 text-center">
              Product
            </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2"><span className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Hello React</span>  </div>
      </header>
    </>
  );
};

export default Nav;
