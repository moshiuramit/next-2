import ProductCard from "./components/ProductCard";
import Nav from "./components/nav/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <h2 className="text-2xl ">Hello World Home Page</h2>
      <ProductCard />
    </main>
  );
}
