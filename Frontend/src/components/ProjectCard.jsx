import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full max-w-full rounded-lg shadow overflow-hidden">
      <Link to={`/project/${project?._id}`}>
        <div className="w-full aspect-video overflow-hidden rounded-sm">
          <img
            src={project?.projectImg?.url}
            alt={project?.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            decoding="async"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="sm:px-1 pb-2">
        <Link to={`/project/${project?._id}`}>
          {/* Title */}
          <h5
            className="text-base font-medium tracking-tight text-gray-900 dark:text-white mt-2 h-12"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {project?.title}
          </h5>

          {/* Description */}
          <div className="text-xs mt-1">
            <div
              className="text-gray-400"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{
                __html: project?.description || "",
              }}
            />
          </div>
        </Link>

        <div className="mt-2">
          <a
            href={project?.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#ba9aeb] hover:underline text-xs sm:text-sm"
          >
            Check Live Site <TrendingUp size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
