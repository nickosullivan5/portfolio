import Navbar from "./sections/Navbar.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Education from "./sections/Education.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Projects from "./sections/Projects.jsx";
import TechStack from "./sections/TechStack.jsx";
import FadeOnScroll from "./sections/FadeOnScroll.jsx";

function App() {
  return (
      <main className="max-w-6xl mx-auto"

      >
        <Navbar className="z-50 "/>
        <div className="pt-30 max-w-3xl mx-auto">
            <FadeOnScroll>
            <AboutMe/>
          </FadeOnScroll>
            <FadeOnScroll>

            <WorkExperience/>
                </FadeOnScroll>

                <Education />
            <TechStack/>


            <Projects/>

        </div>






      </main>


  )
}

export default App
