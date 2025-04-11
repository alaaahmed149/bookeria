import Link from "next/link";
import { Book, ShoppingCart } from "lucide-react";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-cyan-900">
      <div className="flex items-center text-white text-2xl font-bold gap-2">
        <Book />
        Bookeria
      </div>
      <div className="flex items-center gap-10 text-lg text-white mr-3">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link  href="/">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}
