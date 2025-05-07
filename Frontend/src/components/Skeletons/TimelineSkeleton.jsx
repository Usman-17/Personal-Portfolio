const TimelineSkeleton = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* timeline */}
      <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse" />

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {[1, 2, 3].map((_, index) => (
          <li key={index} className="mb-10 ms-8">
            {/* icon */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 animate-pulse" />

            <div className="space-y-2 animate-pulse">
              {/* title */}
              <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
              {/* date */}
              <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>

              {/* description */}
              <div className="h-4 max-w-3xl bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 max-w-2xl bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimelineSkeleton;
