import SectionHeading from "./SectionHeading";
import { useGetAllTimelines } from "../hooks/useGetAllTimelines";
import InViewAnimation from "./InViewAnimation";
import TimelineSkeleton from "./Skeletons/TimelineSkeleton";

const Timeline = () => {
  const { timelines, isLoading } = useGetAllTimelines();

  if (isLoading) {
    return <TimelineSkeleton />;
  }

  return (
    <>
      {timelines && (
        <div className="p-4  py-4 max-w-4xl mx-auto">
          <SectionHeading text="Timeline" />

          <div className="">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {timelines?.map((timeline, index) => (
                <li key={timeline?._id} className="mb-10 ms-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>

                  <InViewAnimation delay={index * 0.1}>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {timeline?.title}
                    </h3>

                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {timeline?.timeline.from} to{" "}
                      {timeline?.timeline.to || "Present"}
                    </time>

                    <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400 max-w-3xl">
                      {timeline?.description}
                    </p>
                  </InViewAnimation>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;
