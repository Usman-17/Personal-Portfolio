import "./App.css";
import { useEffect } from "react";

import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ViewProjectPage from "./pages/ViewProjectPage";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ViewProjectPage />} />
          <Route path="all-projects" element={<AllProjects />} />
        </Routes>

        <Toaster
          toastOptions={{
            style: {
              background: "linear-gradient(90deg, #6a0dad, #8a2be2)",
              color: "#fffbfb",
              fontFamily: "Poppins",
              fontSize: "13px",
            },
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
