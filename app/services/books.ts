import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bookeria_db",
  password: "alaa1234",
  port: 5432,
});

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  description?: string;
  category: string;
  rating?: number;
  cover_url: string;
  published_date?: Date | string;
};

export async function getAllBooks(): Promise<Book[]> {
  try {
    const { rows } = await pool.query("SELECT * FROM books");
    return rows;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

// Add more book-related functions here as needed
// Example: getBookById, createBook, updateBook, etc. 