import Navbar from "./sections/Navbar.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Education from "./sections/Education.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Projects from "./sections/Projects.jsx";

function App() {
  return (
      <main className="max-w-6xl mx-auto">
        <Navbar className="z-50"/>
        <div className="pt-22 max-w-3xl mx-auto">

            <AboutMe/>

              <Education />
            <WorkExperience/>
            <Projects/>
        </div>





      </main>


  )
}

export default App
