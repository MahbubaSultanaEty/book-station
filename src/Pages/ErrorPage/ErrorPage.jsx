import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-amber-400 mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-300 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-amber-400 text-black font-semibold rounded-xl shadow-lg hover:bg-amber-300 transition-all duration-300"
        >
          Go Back Home
        </Link>

        {/* Optional Illustration */}
        <div className="mt-10">
          <img
            src="https://illustrations.popsy.co/gray/web-error.svg"
            alt="error illustration"
            className="w-full max-w-xs mx-auto opacity-90"
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;