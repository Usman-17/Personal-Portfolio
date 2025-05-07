const ViewProjectSkeleton = () => {
  return (
    <div className="min-h-[100vh]  px-3 py-6 max-w-5xl mx-auto animate-pulse">
      {/* Title */}
      <div className="h-8 bg-gray-800 w-3/4 rounded mb-4" />
      {/* Image  */}
      <div className="w-full aspect-video bg-gray-800 rounded mb-4" />

      <div className="space-y-4">
        {/* <div className="h-5 w-1/3 bg-gray-700 rounded" /> */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-800 rounded" />
          <div className="h-3 w-5/6 bg-gray-800 rounded" />
          <div className="h-3 w-2/3 bg-gray-800 rounded" />
        </div>

        <div className="h-5 w-1/3 bg-gray-800 rounded mt-6" />
      </div>
    </div>
  );
};

export default ViewProjectSkeleton;
