export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-gray-100 h-screen hidden w-[25%] md:block lg:block">
        {/* SideBar */}
      </div>
      <div className="flex flex-col h-screen w-full p-5">
        <h1 className="text-3xl font-bold">Our Books</h1>
        {children}
      </div>
    </div>
  );
}
