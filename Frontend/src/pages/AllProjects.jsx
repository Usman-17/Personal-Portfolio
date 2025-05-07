import { useState } from "react";
import { ChevronDown, Undo } from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import InViewAnimation from "../components/InViewAnimation";
import ProjectCardSkeleton from "../components/Skeletons/ProjectCardSkeleton";

import { useGetAllProjects } from "../hooks/useGetAllProjects";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllProjects = () => {
  const { projects = [], isLoading } = useGetAllProjects();

  const [showFilter, setShowFilter] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Toggle selected project type
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Filtered projects
  const filteredProjects =
    selectedTypes.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTypes.includes(project?.projectType)
        );

  return (
    <>
      <Helmet>
        <title>All Projects | Muhammad Usman - MERN Stack Developer</title>
        <meta
          name="description"
          content="Explore all development projects by Muhammad Usman, built with MERN Stack, including web apps, mobile apps, and more."
        />
        <meta property="og:title" content="All Projects | Muhammad Usman" />
        <meta
          property="og:description"
          content="Browse the complete list of MERN stack projects including full-stack web and mobile apps by Muhammad Usman."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/all-projects" />
      </Helmet>

      <div className="max-w-7xl w-full m-auto px-4 pt-6 sm:pt-5">
        {/* Breadcrumb */}
        <nav
          className="text-sm text-gray-400 mb-6 hidden sm:block"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition font-medium"
              >
                <Undo size={16} className="mb-0.5" />
                <span>Home</span>
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-300 font-medium">All Projects</li>
          </ol>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-8 text-left">
          All Projects
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          {/* Filter Section */}
          <div className="w-full sm:w-1/4">
            <div
              onClick={() => setShowFilter((prev) => !prev)}
              className="flex justify-between items-center sm:block cursor-pointer"
            >
              <p className="text-xl uppercase flex items-center gap-1 font-semibold">
                Filters
                <ChevronDown
                  size={18}
                  className={`sm:hidden transform transition-transform ${
                    showFilter ? "rotate-180" : ""
                  } text-gray-500`}
                />
              </p>
            </div>

            {/* Filters */}
            <div
              className={`transition-all duration-300 ease-in-out mt-4 space-y-6 ${
                showFilter ? "block" : "hidden"
              } sm:block`}
            >
              {/* Project Type Filter */}
              <div className="border border-gray-600 rounded px-5 py-4 select-none">
                <p className="uppercase mb-4 text-sm font-medium">
                  Project Type
                </p>

                {["Web App", "Mobile App"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer mb-2"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-gray-700"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    />
                    <span className="font-medium text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Project Cards Section */}
          <div className="w-full sm:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
              {isLoading
                ? Array.from({ length: 9 }).map((_, idx) => (
                    <ProjectCardSkeleton key={idx} />
                  ))
                : filteredProjects.map((project, index) => (
                    <InViewAnimation delay={index * 0.1} key={project?._id}>
                      <ProjectCard project={project} />
                    </InViewAnimation>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
