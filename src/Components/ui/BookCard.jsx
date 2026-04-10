import React from 'react';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <div>
            <div
       
        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* TOP: Title + Author */}
        <div className="p-4 text-center border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            {book.bookName}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            by {book.author}
          </p>
        </div>

        {/* IMAGE CENTER */}
        <div className="flex justify-center items-center py-6 bg-gray-50">
          <img
            src={book.image}
            alt={book.bookName}
               className="h-56 object-contain transition duration-300 transform hover:scale-105 hover:rotate-0"
          />
        </div>

        {/* BOTTOM INFO */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between text-lg font-semibold text-gray-600">
            <span>⭐ {book.rating}</span>
            <span>{book.category}</span>
          </div>

          <div className="flex justify-between text-xs font-semibold text-gray-500">
            <span>{book.totalPages} pages</span>
            <span>{book.yearOfPublishing}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-white badge text-amber-600 border-amber-800 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

                    <Link to={`/bookDetails/${book.bookId}`}>
                     <button className="w-full mt-3 py-2 text-sm font-medium text-white btn bg-green-400 hover:bg--900 rounded-lg transition">
            View Details
                        </button>
                    </Link>
         
        </div>
      </div>
        </div>
    );
};

export default BookCard;