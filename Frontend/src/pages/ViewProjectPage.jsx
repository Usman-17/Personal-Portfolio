import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Undo } from "lucide-react";
import ViewProjectSkeleton from "../components/Skeletons/ViewProjectSkeleton";
import { Helmet } from "react-helmet-async";

const ViewProjectPage = () => {
  const { id } = useParams();

  const {
    data: project,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const response = await fetch(`/api/v1/project/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch project: ${response.statusText}`);
      }
      return response.json();
    },
    retry: false,
  });

  if (isLoading) return <ViewProjectSkeleton />;

  if (isError) {
    return (
      <div className="text-red-600 bg-red-50 border border-red-200 p-4 rounded-md mt-6 max-w-3xl mx-auto">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      {project && (
        <Helmet>
          <title>{project.title} | Muhammad Usman - MERN Stack Portfolio</title>
          <meta
            name="description"
            content={project.description?.slice(0, 150)}
          />
          <meta property="og:title" content={project.title} />
          <meta
            property="og:description"
            content={project.description?.slice(0, 150)}
          />
          <meta property="og:image" content={project.projectImg?.url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://yourdomain.com/projects/${project._id}`}
          />
        </Helmet>
      )}

      <motion.div
        className="min-h-screen bg-[#0f0f0f] text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl w-full mx-auto px-4 py-4">
          <nav
            className="text-sm text-gray-400 mb-3 hidden sm:block"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  to="/all-projects"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition font-medium"
                >
                  <Undo size={16} className="mb-0.5" />
                  <span>All Projects</span>
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-300 font-medium">{project?.title}</li>
            </ol>
          </nav>
          {/* Breadcrumb */}

          <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight">
            {project?.title}
          </h1>

          <img
            src={project?.projectImg?.url}
            alt={project?.title}
            className="w-full h-auto rounded-xl shadow-2xl mb-6 object-cover"
            loading="lazy"
          />

          {/* Description */}
          <section className="mb-10">
            <h2 className="text-xl font-medium mb-2">Description</h2>
            <div
              className="prose prose-invert max-w-none text-gray-200"
              dangerouslySetInnerHTML={{ __html: project?.description || "" }}
            />
          </section>

          {/* Technologies */}
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-2">Technologies Used</h2>
            <ul className="flex flex-wrap gap-2">
              {project?.technologies?.split(",").map((tech, index) => (
                <li
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm capitalize"
                >
                  {tech.trim()}
                </li>
              ))}
            </ul>
          </section>

          {/* Category & Subcategory */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <section>
              <h2 className="text-lg font-semibold">Project Type</h2>
              <p className="text-gray-300 mt-1">{project?.projectType}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Stack</h2>
              <p className="text-gray-300 mt-1 uppercase">{project?.stack}</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold">Deployed</h2>
              <p className="text-gray-300 mt-1">{project?.deployed}</p>
            </section>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 items-center sm:mt-12">
            {/* View Live Project Button */}
            {project?.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition px-5 py-2 rounded-full text-white text-sm font-medium shadow-md"
              >
                View Live Project <ExternalLink size={16} />
              </a>
            )}

            {/* View GitHub Repo Button */}
            {project?.gitRepoLink && (
              <a
                href={project.gitRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 transition px-5 py-2 rounded-full text-white text-sm font-medium shadow-md"
              >
                View GitHub Repo <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ViewProjectPage;
