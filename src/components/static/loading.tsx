export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--light-mode-bg)] dark:bg-[var(--dark-mode-bg)] gap-4 transition-all duration-300 ease-in-out">
      <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-[var(--dark-mode-elements)] dark:border-t-white rounded-full animate-spin"></div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
          Loading...
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Please wait while we fetch the data
        </p>
      </div>
    </div>
  );
}
