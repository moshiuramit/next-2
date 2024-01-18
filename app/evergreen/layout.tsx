import Nav from "../components/nav/Nav";

export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Nav />
      <div className="custom-container"> 
        <p className="text-xl font-bold">Current time is {new Date().toLocaleTimeString()}</p>
        {children}
      </div>
    </section>
  );
}
