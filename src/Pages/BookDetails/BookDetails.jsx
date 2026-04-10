
import { useLoaderData, useParams } from 'react-router';

// const booksPromise = fetch("/public/BooksData.json").then(res => res.json());

const BookDetails = () => {

    const {id} = useParams();
    console.log("book id", id);
    // const books = use(booksPromise)
    // console.log(books);
    const books = useLoaderData();
    console.log(books);

    const expectedBook = books.find(book => book.bookId == id);
    console.log(expectedBook);

    return (
       <div className="max-w-6xl mx-auto my-16 px-6 font-sans">
  <div className="grid lg:grid-cols-12 gap-16 items-start">
    
    {/* IMAGE SECTION - Soft Floating Style */}
    <div className="lg:col-span-5 relative group">
      {/* Background Decorative Element */}
      <div className="absolute -inset-4 bg-emerald-50 rounded-[2rem] -z-10 transition-transform group-hover:scale-105 duration-700"></div>
      
      <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex justify-center border border-gray-100">
        <img
          src={expectedBook.image}
          alt={expectedBook.bookName}
          className="h-[480px] object-contain transition-all duration-700 hover:rotate-0"
          style={{ transform: "perspective(1200px) rotateY(12deg) scale(1.02)" }}
        />
      </div>
    </div>

    {/* INFO SECTION */}
    <div className="lg:col-span-7 flex flex-col justify-center py-4">
      
      {/* TAGS (Moved to Top for Modern look) */}
      <div className="flex flex-wrap gap-2 mb-4">
        {expectedBook.tags.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-widest font-bold bg-emerald-100/50 text-emerald-700 px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* TITLE & AUTHOR */}
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {expectedBook.bookName}
        </h1>
        <p className="text-lg text-gray-400 mt-3 italic">
          by <span className="text-gray-700 font-semibold not-italic">{expectedBook.author}</span>
        </p>
      </div>

      {/* REVIEW - Improved Legibility */}
      <div className="relative mb-8">
        <span className="absolute -left-4 -top-2 text-4xl text-emerald-200 font-serif">“</span>
        <p className="text-gray-600 leading-relaxed text-lg pl-2">
          {expectedBook.review.slice(0, 260)}...
          <button className="text-emerald-600 font-medium ml-2 hover:underline">Read more</button>
        </p>
      </div>

      {/* META GRID - Modern Borderless Style */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 border-y border-gray-100 py-8 mb-8">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Category</p>
          <p className="font-semibold text-gray-800">{expectedBook.category}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Rating</p>
          <p className="font-semibold text-gray-800">⭐ {expectedBook.rating}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Pages</p>
          <p className="font-semibold text-gray-800">{expectedBook.totalPages}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Published</p>
          <p className="font-semibold text-gray-800">{expectedBook.yearOfPublishing}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Publisher</p>
          <p className="font-semibold text-gray-800">{expectedBook.publisher}</p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-10 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-gray-200 active:scale-95">
          Add to Reading List
        </button>
        <button className="px-10 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all active:scale-95">
          Wishlist
        </button>
      </div>

    </div>
  </div>
</div>
  );
};

export default BookDetails;