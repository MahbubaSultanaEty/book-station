import React, { use } from 'react';
import Books from '../Pages/Books/books';
import BookCard from './ui/BookCard';

const booksPromise= fetch("/public/BooksData.json").then(res => res.json())

const AllBooks = () => {

    const books = use(booksPromise)
    // console.log(books);
    return (
     <div className="container mx-auto my-10 px-4 ">
  <h2 className="text-3xl font-semibold text-center mb-10 text-green-900">
    Books Collection
            </h2>
            



  <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book) => <BookCard book={book} key={book.bookId}></BookCard>)}
  </div>
</div>
    );
};

export default AllBooks;