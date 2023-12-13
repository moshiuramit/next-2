import Nav from "../components/nav/Nav";

export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center p-24">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Nav />
      <p>{new Date().toLocaleTimeString()}</p>
      {children}
    </section>
  );
}
