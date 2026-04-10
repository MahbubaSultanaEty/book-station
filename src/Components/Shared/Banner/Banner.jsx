import React from 'react';

const Banner = () => {
    return (
     <div className="hero  min-h-[80vh] bg-gradient-to-r from-green-200 via-lightgreen-200 to-yellow-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          className="max-w-sm rounded-2xl shadow-2xl"
          alt="books"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Discover Your Next <span className="text-amber-600">Favorite Book</span>
          </h1>

          <p className="py-6 text-gray-600 max-w-md">
            Explore thousands of books, track your reading journey, and build your personal library — all in one place.
          </p>

          <div className="flex gap-4">
            <button className="btn bg-green-600 text-white hover:bg-green-500 border-none">
              Get Started
            </button>

            <button className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;