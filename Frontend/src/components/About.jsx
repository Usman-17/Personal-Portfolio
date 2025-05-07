import signature from "../assets/sig.png";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGetUser } from "../hooks/useGetUser";
import AboutSkeleton from "./Skeletons/AboutSkeleton";

const About = () => {
  const { user, error, isLoading } = useGetUser();

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
  });

  if (error) {
    return (
      <div className="p-4 max-w-4xl mx-auto py-5">
        <div className="text-center text-red-500">
          Error loading user data: {error.message}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <AboutSkeleton />;
  }

  return (
    <div className="px-4 sm:p-2 max-w-4xl mx-auto mt-10">
      <SectionHeading text="About Me" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-x-8">
        {/* About Text & Signature */}
        <div className="w-full lg:w-2/3 space-y-4">
          <motion.p
            ref={aboutRef}
            className="text-sm md:text-xl lg:text-lg font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {user?.aboutMe}
          </motion.p>

          {/* Signature */}
          <div className="flex justify-end pt-2">
            <motion.img
              src={signature}
              alt="Signature"
              className="w-28 h-auto opacity-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80 lg:w-60 lg:h-60 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.2 }}
        >
          <img
            src={user?.profileImg?.url}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
