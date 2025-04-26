import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[var(--dark-mode-bg)] p-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-gray-800 dark:text-white animate-pulse">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-[var(--dark-mode-elements)] text-white dark:bg-white dark:text-[var(--dark-mode-elements)] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <IoArrowBack />
          Back to Home
        </Link>
      </div>
    </div>
  );
}