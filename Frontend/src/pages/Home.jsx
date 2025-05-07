import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Muhammad Usman | MERN Stack Developer</title>
        <meta
          name="description"
          content="Muhammad Usman is a MERN Stack Developer from Pakistan, specializing in dynamic, responsive web applications. Delivering clean code and innovative solutions. Available for freelance projects."
        />
        <meta
          name="keywords"
          content="MERN Stack, Full Stack Developer, MongoDB, Express, React, Node.js, Portfolio"
        />
        <meta name="author" content="Muhammad Usman" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph (for Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Muhammad Usman | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="View MERN Stack projects and skills of Muhammad Usman."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muhammad Usman | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="MERN Stack developer portfolio of Muhammad Usman."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview.jpg"
        />
      </Helmet>

      <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div>
          <Hero />
          <About />
          <Timeline />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
