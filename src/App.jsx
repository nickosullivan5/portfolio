import Navbar from "./sections/Navbar.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Projects from "./sections/Projects.jsx";
import TechStack from "./sections/TechStack.jsx";
import FadeOnScroll from "./sections/FadeOnScroll.jsx";
import Footer from "./sections/Footer.jsx";
import {useEffect, useState} from "react";

function App() {
    const [loading , setLoading] = useState(true);
    const [emojiCount, setEmojiCount] = useState(1);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500)
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (!loading) return;
        const interval = setInterval(() => {
            setEmojiCount((prev) => (prev === 3 ? 1 : prev + 1));
        }, 500)
        return () => clearInterval(interval)
    }, [loading])
  return (
      <main className="max-w-6xl mx-auto relative min-h-screen overflow-hidden">

          {/* preload */}
          {loading && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700">
                  <div className="opacity-100 animate-fade-in">
                      <AboutMe />
                      {

                      }
                      <div className="text-lg text-shadow-gray-200 text-shadow-lg flex items-center justify-center pt-5 font-bold ">
                          {"❤️‍🔥 ".repeat(emojiCount)}
                      </div>
                  </div>

              </div>
          )}

          {/* Main */}
          <div
              className={`transition-opacity duration-2000 ${loading ? "opacity-0" : "opacity-100"}`}
          >
              <div className="pt-15 md:pt-15 max-w-3xl mx-auto">
                  <Navbar />

                  <FadeOnScroll>
                      <AboutMe />
                  </FadeOnScroll>
                  <FadeOnScroll>
                      <TechStack />
                  </FadeOnScroll>
                  <FadeOnScroll>
                      <WorkExperience />
                  </FadeOnScroll>
                  {/*<Education />*/}
                  <FadeOnScroll>
                      <Projects />
                  </FadeOnScroll>
                  <FadeOnScroll>
                      <Footer />
                  </FadeOnScroll>

              </div>
          </div>
      </main>
  );
}

export default App;



