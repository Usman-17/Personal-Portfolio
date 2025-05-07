const AboutSkeleton = () => {
  return (
    <div className="sm:p-2 max-w-full mx-auto mt-10">
      {/* Heading */}
      <div className="h-8 w-36 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />

      <div className="flex flex-col lg:flex-row items-center justify-between sm:gap-6">
        {/* Left: About text */}
        <div className="w-full lg:w-2/3 space-y-3 animate-pulse">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

          {/* Signature */}
          <div className="flex justify-end pt-4">
            <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-60 h-60 md:w-96 md:h-96 lg:w-60 lg:h-60 flex-shrink-0 mt-6 lg:mt-0 animate-pulse">
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
