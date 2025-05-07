import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

import MagicButton from "./ui/MagicButton";
import ShootingStars from "./ui/ShootingStars";
import { TextGenerateEffect } from "./ui/TextGenrateEffect";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { useGetUser } from "../hooks/useGetUser";

const socialLinks = [
  { icon: <Facebook size={24} />, url: "facebookURL" },
  { icon: <Instagram size={24} />, url: "instagramURL" },
  { icon: <Linkedin size={24} />, url: "linkedInURL" },
  { icon: <Github size={24} />, url: "githubURL" },
];

const Hero = () => {
  const { user } = useGetUser();

  return (
    <div className="pb-20 pt-36 sm:my-10">
      {/* Social Media Icons */}
      <aside className="sm:flex flex-col items-center space-y-6 p-4 absolute left-4 top-1/2 transform -translate-y-1/2 hidden z-10">
        {socialLinks.map(({ icon, url }, index) => {
          const link = user?.[url];
          return link ? (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-white group transition duration-300"
            >
              <div className="p-2 rounded-full group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-600 group-hover:scale-110 transition-all duration-300">
                {icon}
              </div>
            </a>
          ) : (
            <div
              key={index}
              className="text-purple opacity-40 cursor-not-allowed"
              title="Loading..."
            >
              <div className="p-2 rounded-full">{icon}</div>
            </div>
          );
        })}
      </aside>

      <div className="flex-1 flex flex-col items-center justify-center">
        <ShootingStars />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="max-w-[65vw] md:max-w-2xl lg:max-w-[60vw] flex md:flex-col justify-start items-center"
        >
          <HoverBorderGradient containerClassName="rounded-full text-xs sm:text-sm">
            <span>✨ Take a Look at My Portfolio</span>
          </HoverBorderGradient>
        </motion.div>

        <div className="flex flex-col items-center relative z-10">
          {/* Title */}
          <TextGenerateEffect
            words="Hi, I'm Muhammad Usman"
            className="text-center text-3xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-wide sm:mb-2"
          />

          {/* About Me */}
          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center text-xs md:text-base max-w-[90vw] sm:max-w-[60vw] md:max-w-[80vw] lg:max-w-[48vw] sm:mb-5"
          >
            MERN Stack Developer from Pakistan specializing in creating dynamic
            and responsive web applications. Delivering high-quality code and
            innovative solutions. Available for freelance projects.
          </motion.p>

          <div className="mt-5 sm:mt-0">
            <a
              href={user?.resumeImg?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="Explore My Resume"
                icon={<TrendingUp size={18} />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
