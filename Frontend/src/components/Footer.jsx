import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useGetUser } from "../hooks/useGetUser";

const Footer = () => {
  const { user } = useGetUser();
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-3 sm:py-3 text-center text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
      <div>Developed by Muhammad Usman | &copy; {currentYear}</div>
      <div className="flex items-center gap-5">
        <a
          href={user?.facebookURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-gray-300 transition-colors"
        >
          <Facebook size={20} />
        </a>

        <a
          href={user?.instagramURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-gray-300 transition-colors"
        >
          <Instagram size={20} />
        </a>
        <a
          href={user?.linkedInURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-gray-300 transition-colors"
        >
          <Linkedin size={20} />
        </a>

        <a
          href={user?.githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-gray-300 transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
