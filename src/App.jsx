import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FrontPage from "./components/FrontPage/FrontPage";
import Projects from "./components/Project/Project";
import Career from "./components/Career/Career";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <>
      <div id="container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FrontPage />
                  <section>
                    <Projects />
                    <Career />
                    <Skills />
                    <Education />
                  </section>
                  <footer>
                    <About />
                  </footer>
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
