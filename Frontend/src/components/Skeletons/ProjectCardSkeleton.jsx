const ProjectCardSkeleton = () => (
  <div className="w-full max-w-full rounded-lg shadow overflow-hidden animate-pulse">
    <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-sm" />
    <div className="p-2 space-y-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/4 mt-2" />
    </div>
  </div>
);

export default ProjectCardSkeleton;
