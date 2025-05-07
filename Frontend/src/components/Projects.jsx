import SectionHeading from "./SectionHeading";
import InViewAnimation from "./InViewAnimation";

import { Link } from "react-router-dom";
import { Redo } from "lucide-react";

import { useGetAllProjects } from "../hooks/useGetAllProjects";
import MagicButton from "./ui/MagicButton";
import ProjectCardSkeleton from "../components/Skeletons/ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";
// Imports End

const Projects = () => {
  const { projects, error, isLoading } = useGetAllProjects();

  if (error) {
    return (
      <div className="p-4 max-w-4xl mx-auto py-5">
        <div className="text-center text-red-500">
          Error loading project data: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="py-5 max-w-4xl mx-auto mt-10">
      <SectionHeading text="Recent Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))
          : projects.slice(0, 3).map((project, index) => (
              <InViewAnimation delay={index * 0.1} key={project?._id}>
                <ProjectCard project={project} />
              </InViewAnimation>
            ))}
      </div>

      <Link to={"/all-projects"}>
        <div className="flex justify-center">
          <MagicButton
            title={"View All Projects"}
            icon={<Redo size={16} />}
            position="right"
          />
        </div>
      </Link>
    </div>
  );
};

export default Projects;
