import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Link } from 'react-router';

const ListedReadList = ({sortingType}) => {
  const { storedBooks } = useContext(BookContext);

  const [filteredReadList, setFilteredReadList]= useState(storedBooks)

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages)

        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
       const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating)

        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, storedBooks]);


  // Empty State
  if (filteredReadList.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p>No books marked as read yet 📚</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">
        Read Books ({storedBooks.length})
      </h3>

      <div className="grid gap-8">
        {filteredReadList.map((book) => (
          <div
            key={book.bookId}
            className="group relative flex gap-6 items-center p-[2px] rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 hover:scale-[1.01] transition-all duration-500"
          >
            {/* Inner Card */}
            <div className="flex w-full bg-white rounded-3xl p-6 gap-6 items-center relative overflow-hidden">
              
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-emerald-100/40 via-cyan-100/40 to-blue-100/40 blur-xl"></div>

              {/* Image */}
              <div className="relative z-10 w-28 h-40 rounded-2xl overflow-hidden shadow-xl group-hover:rotate-1 group-hover:scale-105 transition duration-500">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-grow z-10 space-y-3">
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all">
                  {book.bookName}
                </h3>

                <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest">
                  {book.author}
                </p>

                {/* Meta */}
                <div className="flex gap-3 flex-wrap text-xs font-semibold">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    📖 {book.totalPages}
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    ⭐ {book.rating}
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>

                {/* Status */}
                <div>
                  <span className="px-4 py-1 text-xs font-bold rounded-full shadow-sm bg-emerald-500 text-white shadow-emerald-200">
                    ✔ Completed
                  </span>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex flex-col items-end gap-3 z-10">

                {/* Already Read Button */}
                <button className="px-5 py-2 rounded-xl text-sm font-bold bg-emerald-500 text-white shadow-md">
                  Completed
                </button>

                        {/* View Details */}
                        <Link to={`/bookDetails/${book.bookId}`}>
                <button                 
                  className="px-5 py-2 rounded-xl text-sm font-bold bg-gray-900 text-white hover:bg-black hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Details →
                            </button>
                            </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;