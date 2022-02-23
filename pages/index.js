import Acheivements from "../components/Acheivements/Acheivements";
import Contact from "../components/Contact/Contact";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Acheivements />
      </main>
      <Contact />
    </div>
  );
}

export default Home;
