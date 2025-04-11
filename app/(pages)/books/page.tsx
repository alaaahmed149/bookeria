import { getAllBooks, Book } from "@/app/services/books";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
export default async function Books() {
  try {
    const books = await getAllBooks();
    return (
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-2">
        {books.map((book: Book) => (
          <Link key={book.id} href="/">
            <div className="border-cyan-700 border-1 rounded-md p-5 h-full flex flex-col justify-center hover:bg-gray-100">
              <div className="flex justify-center flex-1/2">
                <Image
                  src={book.cover_url}
                  alt={book.title}
                  width="200"
                  height="400"
                  className="h-full!"
                />
              </div>
              <h3 className="font-bold text-xl mt-2">{book.title}</h3>
              <p className="font-bold text-sm opacity-70">{book.author}</p>
              <p className="font-semibold text-sm opacity-55">${book.price}</p>
              <div className="flex items-center gap-2">
              <p>Rating: {book.rating}</p><Star size={18} color="orange" fill="yellow"/> 
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading books</div>
      </div>
    );
  }
}
